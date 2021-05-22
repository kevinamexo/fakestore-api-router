import React,{useEffect,useState} from 'react'
import useFetch from './useFetch'

const Categories = () => {

    const [categories, setCategories]=useState([])
    const [loading, setLoading]=useState(false)
    const {response}= useFetch('https://fakestoreapi.com/products/categories',{})
    console.log(response)
    return (
        <div>
            <h1>Categories</h1>
            {response&&response.map(cat=> (
                <h3>{cat}</h3>
            ))}
        </div>
    )
}

export default Categories
