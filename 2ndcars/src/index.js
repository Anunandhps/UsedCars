import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavbarH from './component/NavbarH';
import Home from './pages/Home';
import NavbarRB from './component/NavbarRB';
import Buyer from './pages/Buyer';
import Seller from './pages/Seller';
import Login from './pages/Login';
import View from './pages/View';
import Viewitem from './component/Viewitem';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
    <App />
    </BrowserRouter>


    {/* <NavbarH/> */}
    {/* <Home/> */}
    {/* <NavbarRB/> */}
    {/* <Buyer/> */}
    {/* <Seller/> */}
    {/* <Login/> */}
    {/* <View/> */}
    {/* <Viewitem/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
