import React, { useState, useEffect } from 'react';
//import Products from './components/Products/Products'
//import Navbar from './components/Navbar/Navbar'
import { firebaseInstance, dbService, storageService } from './fbase';
import { Products, Navbar, Cart, Checkout, Upload } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { get } from 'react-hook-form';
// const database = getDatabase();

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  const handleAddToCart = async (productId, price) => {
    const current = dbService.collection("products").doc(productId);
    const dbCart = await dbService.collection("cart").doc(productId).get();
    if(dbCart.exists){
        const res = await dbService.runTransaction(async t => {
          const docu = await t.get(current);
          dbService.collection("cart").doc(productId).update({
          name: docu.data().name,
          price: docu.data().price,
          quantity: firebaseInstance.firestore.FieldValue.increment(1),
          totalP: firebaseInstance.firestore.FieldValue.increment(price),
          url: docu.data().url,
          createdAt: Date.now(),
       });
      });
    }
    else{
        const res = await dbService.runTransaction(async t => {
          const docu = await t.get(current);
          dbService.collection("cart").doc(productId).set({
          name: docu.data().name,
          price: docu.data().price,
          quantity: firebaseInstance.firestore.FieldValue.increment(1),
          totalP: docu.data().price * 1,
          url: docu.data().url,
          createdAt: Date.now(),
       });
      });
    }
  }

  const handleUpdateCartQty = async (id, price , quantity) => {
    const res = await dbService.runTransaction(async t => {
      const dbCart = await t.get(dbService.collection("cart").doc(id));
      dbService.collection("cart").doc(id).update({
      quantity: firebaseInstance.firestore.FieldValue.increment(quantity),
      totalP: firebaseInstance.firestore.FieldValue.increment(price),
      });
    });
  }

  const handleRemoveFromCart = async (id) => {
    dbService.collection("cart").doc(id).delete();
  }

  const handleEmptyCart = async () => {
    await dbService.collection('cart').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });
    setCart([]);
  }


   const handleCaptureCheckout = async (newOrder) => {
     let final = [];
    for (let i = 0; i < Object.keys(newOrder).length; i++ ) {
      final.push(newOrder[Object.keys(newOrder)[i]]);
    }

      const incomingOrder = await dbService.collection("orders").doc().set({
        customer: final[0],
        shipping: final[1],
        payment: final[2],
        cart: cart,
      });
  }

  const uploadBook = async (uploading, attachment) => {
    console.log(uploading, attachment);
    let attachmentUrl = "";
    const attachmentRef = storageService.ref().child(`${Date.now()}`);
    const response = await attachmentRef.putString(attachment, "data_url");
    attachmentUrl = await response.ref.getDownloadURL();

    const bookObj = {
     createdAt: Date.now(),
     name: uploading.name,
     price: uploading.price,
     category: uploading.category,
     url: attachmentUrl,
   };
    await dbService.collection("products").add(bookObj);
  }

  useEffect(() => {
    dbService.collection("products").onSnapshot((snapshot) => {
      const productsArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsArray);
    });
    dbService.collection("cart").onSnapshot((snapshot) => {
      const cartArray = snapshot.docs.map(doc => ({
        id: doc.id,
         ...doc.data(),
      }));
      setCart(cartArray);
    });
  }, []);


  return (
    <Router>
      <div>
        <Navbar totalItems={cart.length} />
        <Routes>
          <Route exact path="/" element={ <Products products={products} onAddToCart={handleAddToCart} /> }></Route>
          <Route exact path="/cart" element={ <Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} /> }>
          </Route>
          <Route exact path="/checkout" element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout}  handleEmptyCart={handleEmptyCart} />}>
          </Route>
          <Route exact path="/upload" element={ <Upload uploading={uploadBook} /> }></Route>
        </Routes>
      </div>
    </Router>

  )
}

export default App
