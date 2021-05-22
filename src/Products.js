import React,{useEffect} from 'react'
import useFetch from './useFetch'
import Product from './Product'
import './Products.css'
import { Switch,Route, Link, useRouteMatch, matchPath } from 'react-router-dom'

const Products = ({ match }) => {
    const {url, path}= useRouteMatch()
    const {response,error,loading} = useFetch('https://fakestoreapi.com/products', {})
    
    const productList= response&&response.map(prod=>{
        return(
            <div className="product" key={prod.id}>
                <div className="product__image-container">
                    <img className="product__product-image"
                        src={prod.image} alt={prod.title}
                    />
                </div>
                <Link className="products__product-link" to={`${url}/${prod.id}`}>
                    <p className="product__product-name">{prod.title}</p>
                </Link>
            </div>

        )
    
        
    })

    
    return (
        <div className="products-component">
        

                
            <Route exact path={path}>
                <div className="products-page">    
                    <h1>Products</h1>
                    <div className="products-container">
                        {productList}
                    
                    </div>
                </div>
            </Route>
            <Route exact path={`${path}/:productId`}>
                <Product products={response}/>
            </Route>
    
                
            
        </div>
    )
}

export default Products
