import React from 'react'
import {Route, useParams, useRouteMatch} from 'react-router-dom'
import useFetch from './useFetch'
import './Product.css'
function Product(){
  
    const {productId}= useParams()
    const {url, path}= useRouteMatch()

    const {response,error, loading}=useFetch('https://fakestoreapi.com/products', {})
    
    const product = response&&response.find(p => p.id === Number(productId));
    console.log(product)

    return (
        response &&(
        <div className="product-page">
            <p className="product-page__prod-name">{product.title}</p>
                       <div className="product-page__prod-container">
               
                <div className="product-page__prod-image-container">
                    <img className="product-page__prod-image"
                        src={product.image}/>

                </div>
            </div>
            <p className="product-page__prod-price">PRICE: ${product.price}</p>
            <div className="product-page__prod-desc-container">
                <strong>Product Description:  </strong>
                <p>{product.description}</p>
            </div>
           



                   
        </div>
        )
    )
}

export default Product
