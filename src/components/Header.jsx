import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <header>
        <div className='header-text'>
            <img src={logo} alt="logo" id='logo' />
            <h1>Tea Mafia 295</h1> 
            <h2 className='orange'>The Best Cafe & Hangout Spot in Jammu</h2>
            <button >
                <a href="https://rajvirsiingh.github.io/menu-tea-mafia/">Our Menu</a></button>
        </div>
    </header>
  )
}

export default Header