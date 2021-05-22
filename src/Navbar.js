import React, {useState, useEffect} from 'react'
import {AiFillShop} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const [showMenuButton, setShowMenuButton]= useState(false)
    const [clicked, setClicked]= useState(false)

    const handleShowMenuButton=()=>{
        if (window.innerWidth <= 768){
            setShowMenuButton(true)
        }else{
            setClicked(false)
            setShowMenuButton(false)
        }
    }
    const handleMenuBtnClick=()=>{
        setClicked(!clicked)
    }

    

    useEffect(() => {
        window.addEventListener('resize', handleShowMenuButton)
        return () => {
            window.removeEventListener('resize', handleShowMenuButton)
        }
    }, [])

    return (
        <nav className="navbar">
            {showMenuButton && (
                <FaBars onClick={handleMenuBtnClick} className={showMenuButton?"navbar__menu-button":"hidden"}/>
                )
            }   
            
            <AiFillShop className="navbar__shop-logo"/>   
            

            <ul
                className={showMenuButton? `mobile-menu-${clicked? "full":"hidden"}`:"nav-items"}
            >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/categories">Categories</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
