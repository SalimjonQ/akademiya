import React from 'react'
import Logo from './Logo'
import MenuItems from './MenuItems'
import BurgerMenu from './BurgerMenu'

const Header = () => {
  return (
    <div className='header'>
      <nav className='menu-head'>
        <BurgerMenu />
        <Logo />
        <MenuItems />
      </nav>      
    </div>
  )
}

export default Header
