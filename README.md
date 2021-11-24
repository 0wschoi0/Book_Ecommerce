<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# Book_Ecommerce 중고거래 서적 사이트
--Refurbished Books--



매학기가 시작될때마다 교재를 사야하는 부담감을 조금 줄여주기 위한 사이트를 구상했습니다. 이전 학기에 들었던 수업에서 썼던 교재를 사고 팔 수 있는 중고서적 거래사이트입니다. 

HTML CSS Javascript등을 통해 여러가지 기능을 구현할 사이트의 이름은 “Refurbished Books” 입니다.

기존의 중고거래 사이트들이 여러 개 존재하지만 각각 실제로 사용해본 결과, 몇가지의 단점이 있었기 때문에 이번 프로젝트에서 그것들을 보안해보려고 합니다. 
>>>>>>> f15e31c69b3e3f11f17b7198b2116e051f6474d0

프로젝트 내용
: 업로드되어 있는 책 목록 페이지에서 구매를 희망하는 책을 오른쪽 하단에 있는 아이콘을 클릭하여 장바구니에 저장합니다. 이후 결재 혹은 장바구니에 추가한 물건을 수정하기 위해서는, 페이지의 오른쪽 상단에 있는 장바구니 아이콘을 클릭하여 장바구니 페이지로 이동합니다. 장바구니 페이지에서 구매하고자 하는 물건을 제외한 모든 물건을 제거한 뒤 하단에 위치한 결재 아이콘을 클릭합니다. 이어서 이동된 결재 페이지에서 개인정보를 입력하면 결재가 완료됩니다.
책 목록 페이지에서는 책 표지, 책 이름, 가격이 제공되며 장바구니 페이지에서는 표지, 책 이름, 가격, 수량 그리고 사용자가 결재할 총합 비용을 제공합니다.

설치 방법
: Node.js LTS 버전으로 설치, 깃허브에서 레지스토리 주소를 복사하고 visual studio code에 로드하고 터미널을 연 뒤 다음을 입력합니다.
npm install react react-router-dom react-hook-form
npm install firebase firebase-tools
npm install @material-ui/core @material-ui/icons @chec/commerce.js @stripe/react-stripe-js @stripe/stripe-js react-router-dom react-hook-form

사용 방법
: 위 설명을 따라 설치를 완료하고, 터미널에 npm start를 입력합니다.
