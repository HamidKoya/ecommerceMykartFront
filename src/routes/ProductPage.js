import React, { useState } from "react"
import { useLoaderData } from "react-router-dom"
import {addToCart} from '../features/cart/cartSlice'
import { useDispatch } from "react-redux"
import styles from './ProductPage.module.css'
export async function loader({params}){
    const productId = await params.productId
    const res = await fetch('http://localhost:3000/product/'+productId)
    const products = await res.json()
    return {products}

}

function ProductPage(props){

    const [selectedVariant,setselectedVariant] = useState(0)

    const {products} = useLoaderData()
    const dispatch = useDispatch()
    
    return (
    <main className={styles.ProductPageMain}>
       <img className={styles.ProductImage} src={products.variants[selectedVariant].images[selectedVariant].url}></img>
        <div className={styles.productDetails}>
            <h1>{products.title}</h1>
            <span>MRP &#8377;{products.mrp}</span>
            <span>Color: {products.variants[selectedVariant].name}</span>
            <div className={styles.VariantSelectors}>
                {
                    products.variants.map((variant,index)=>{
                      return  <button className={styles.VariantSelectorButton} style={{ backgroundColor: variant.color }} onClick={()=>setselectedVariant(index)}>&nbsp;</button>
                    })
                }
            </div>
            <div>
                <button className={styles.AddToCartButton} onClick={()=> dispatch(addToCart(products))}>Add to Cart</button>
            </div>
        </div>
        
    </main>
    )
}

export default ProductPage