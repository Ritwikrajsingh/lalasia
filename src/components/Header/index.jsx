import React from 'react'
import '../../styles/Header.css'

export default function Header() {
    return (
        <header>
            <div className='logo'><img src="./logo.svg" /></div>
            <nav>
                <ul>
                    <li>Product</li>
                    <li>Services</li>
                    <li>Article</li>
                    <li>About Us</li>
                </ul>
            </nav>
            <div className='cart-and-profile'>
                <div><img src='./bag.svg' /></div>
                <div><img src='./user.svg' /></div>
            </div>
        </header>
    )
}
