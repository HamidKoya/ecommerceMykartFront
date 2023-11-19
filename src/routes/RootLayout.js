import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

function RootLayout(props) {
  const cartItemsCount = useSelector(state => state.cart.cartItems.length)
  return (
    <>
      <header>
          <span>MyKart</span>
          <nav>
            <ul className="naveList">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        <Link className="CartLink" to={'/cart'}>
        <img src="/icons/cart.svg" alt=""></img>
        <span className="HeaderCartItemsCount">{cartItemsCount}</span>
        </Link>
    </header>
      <Outlet/>
      <footer></footer>
    </>
  );
}

export default RootLayout;
