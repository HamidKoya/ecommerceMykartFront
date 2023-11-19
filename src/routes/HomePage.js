import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
function HomePage(props){

    const [products,setProducts]=useState([])
    useEffect(()=>{
    fetch('http://localhost:3000/product')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])

    return(
        <main>
        <section>
          <div className="container">
            <h2>Recommended products</h2>
            <ul className="productList"> 
            
            {
              products.map(product=>
                <Link to={"/products/"+product._id}>
                <li key={product._id} className="product">
                  <img src={product.variants[0].images[1].url}></img>
                  <h3>{product.title}</h3>
                  <span>&#8377; {product.mrp}</span>
                </li>
                </Link>
                )
            }
             </ul>
          </div>
        </section>
      </main>
    );

}

export default HomePage;