import React from 'react'
import { ReasonStyled } from '../component.styled/reason.styled'
import onlineImg from '../images/icon-online.svg'
import budgetingImg from '../images/icon-budgeting.svg'
import onboardingImg from '../images/icon-onboarding.svg'
import apiImg from '../images/icon-api.svg'

const Reason = () => {
  return (
    <ReasonStyled>
      <div className="group">
        <h1>Why choose Easybank?</h1>
        <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
    your finances like never before.</p>

      </div>

    <div className="group">
      <img src={onlineImg} alt="online banking illustration" />
      <h2>Online Banking</h2>
      <p>Our modern web and mobile applications allow you to keep track of your finances 
    wherever you are in the world.</p>

    </div>

    <div className="group">
      <img src={budgetingImg} alt="simple budgeting illustration" />
      <h2>Simple Budgeting</h2>
      <p>See exactly where your money goes each month. Receive notifications when you&#39;re 
    close to hitting your limits.</p>

    </div>
    
    <div className="group">
      <img src={onboardingImg} alt="fast onboarding illustration" />
      <h2>Fast Onboarding</h2>
      <p>We don&#39;t do branches. Open your account in minutes online and start taking control 
    of your finances right away.</p>

    </div>
    
    <div className="group">
      <img src={apiImg} alt="api illustration" />
      <h2>Open API</h2>
      <p>Manage your savings, investments, pension, and much more from one account. Tracking 
      your money has never been easier.</p>

    </div>
    


    </ReasonStyled>
    
  )
}

export default Reason