import React, {useState} from 'react'
import logo from '../images/logo.svg'
import hbgMenu from '../images/icon-hamburger.svg'
import { HeaderStyled } from '../component.styled/header.styled'
import Navbar from './navbar'

const Header = () => {
  const [openNav, setOpenNav]=useState(false)

  const handleMobileMenu = () => {
    setOpenNav(!openNav)
  }




  return (
    <HeaderStyled>
    
        <img src={logo} alt="easybank_logo" className="logo" />
        <img src={hbgMenu} alt="" className="mobileMenu" onClick={handleMobileMenu} />
        {openNav && <Navbar handleMobileMenu={handleMobileMenu}/>}

    </HeaderStyled>
  )
}

export default Header