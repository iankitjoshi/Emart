import React from 'react'
import '../../CSS/Emart.css'
import { Link } from 'react-router-dom'


function Menu(){
    return(
        <div className="emart-div">
            <nav className="menu-navbar  navbar navbar-light bg-light">
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
            <Link to="/" className="menus">HOME</Link>
            <Link to="/about" className="menus">ABOUT</Link>
            <Link to="/shop" className="menus">SHOP</Link>
            <Link to="/catalouge" className="menus">CATALOGUE</Link>
            <Link to="/new" className="menus">NEW ARRIVALS</Link>
            <Link to="/contact" className="menus">CONTACT</Link>

            </nav>
        </div>
    )
}

export default Menu