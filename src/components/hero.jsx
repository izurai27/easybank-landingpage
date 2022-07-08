import React from 'react'
import { HeroStyled } from '../component.styled/hero.styled'
import mockup from '../images/image-mockups.png'
import Gap from './Gap'

const Hero = () => {
  return (
    <HeroStyled>
      <div className="img">
        <img src={mockup} alt="mockup" />
      </div>
      <div className='message'>

        <Gap height='3rem'/>
        <h1>Next generation digital banking</h1>
        <Gap height='1rem'/>
        <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.</p>
        <Gap height='1rem'/>
        <button className="atcInvite">
          Request Invite
        </button>
        <Gap height='5rem'/>
      </div>
    </HeroStyled>
    
  )
}

export default Hero