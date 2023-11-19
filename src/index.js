import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom"
import RootLayout from './routes/RootLayout'
import ErrorPage from './ErrorPage';
import reportWebVitals from './reportWebVitals';
import { Form } from 'react-router-dom';
import ProductPage, {loader as productLoader} from './routes/ProductPage';
import HomePage from './routes/HomePage';
import CartPage from './routes/CartPage';
import store from './app/store';
import { Provider } from 'react-redux';

const router =createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path: "products/:productId",
        element: <ProductPage/>,
        loader:productLoader
      },
      {
        path: "/cart",
        element: <CartPage/>,
       
      },
    ],
  },
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider  store={store}>
       <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
