import { useState, useEffect } from "react"
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header.js'
import Footer from './components/Footer'
import StartScreen from './screens/StartScreen'


function App() {
  return (
    <Router>
      <Header></Header>
      {/* <main className="py-3"> */}
        <Container>
          <Route exact path='/' component={StartScreen}></Route>
        </Container>
      {/* </main> */}
      <Footer></Footer>
    </Router>
  );
}

export default App;
