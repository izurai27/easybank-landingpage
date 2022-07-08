import React from 'react'
import { HeroStyled } from '../component.styled/hero.styled'
import mockup from '../images/image-mockups.png'

const Hero = () => {
  return (
    <HeroStyled>
      <div className="img">
        <img src={mockup} alt="mockup" />

      </div>
      <h1>Next generation digital banking</h1>
        <h2>Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.</h2>
        <button className="atcInvite">
          Request Invite
        </button>
    </HeroStyled>
    
  )
}

export default Hero