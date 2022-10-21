import React from 'react'
import Logo from './Logo'
import MenuItems from './MenuItems'

const Header = () => {
  return (
    <div className='header'>
        <nav className='menu'>
           <Logo />
           <MenuItems />
        </nav>      
    </div>
  )
}

export default Header
