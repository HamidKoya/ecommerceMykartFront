import React from "react";
import style from './CartPage.module.css'
import { useSelector } from "react-redux";

function CartPage(props){
    const cartItems = useSelector(state => state.cart.cartItems)
   
    return (
        <main className={style.cartPageMain}>
            <ul className={style.cartItemList}>
                {
                    cartItems.map(cartItem=>{
                        return (
                            <li className={style.cartItem}>
                            <img src= "https://img101.urbanic.com/v1/goods-pic/ca3d88d24f034083818e62e73fd8529cUR_w1440_q90.webp"></img>
                            <div>
                            <h3>Knit Pullover</h3>
                            <span>MRP&#8377;1,390</span>
                            </div>
                        </li>

                        )
                    })
                }
               
               
            </ul>
           

        </main>
    );
}

export default CartPage;