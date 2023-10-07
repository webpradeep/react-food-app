import React from 'react'


// Header 
const Header = () => {

    const mobileChange = () => {
        document.querySelector(".menu").classList.toggle("active")

    }
    return (
        <div className="header">
            <div className="logo">Star Khana</div>

            <ul className="menu">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <span onClick={mobileChange} className="mobile-menu">Menu</span>
        </div>
    )
}

export default Header