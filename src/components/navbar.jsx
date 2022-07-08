import React from 'react'
import { NavStyled } from '../component.styled/navbar.styled'
import logo from '../images/logo.svg'
import close from '../images/icon-close.svg'


const Navbar = (props) => {




  return (
    <NavStyled>
      <div className="logobar">
        <img src={logo} alt="easybank_logo" className="logo" />
        <img src={close} alt="closeMobileMenu" className='close' onClick={props.handleMobileMenu}/>
      </div>
      
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        <h1>Next generation digital banking</h1>
        <h2>Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.</h2>
        <button className="atcInvite">
          Request Invite
        </button>
      </div>

    </NavStyled>
    
  )
  
}

export default Navbar
