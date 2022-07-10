import styled from "styled-components";
import bgImg from '../images/bg-intro-mobile.svg'
import bgImgDesktop from '../images/bg-intro-desktop.svg'
export const HeroStyled = styled.main`
  text-align:center;
  
  .img{
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    width:100%;
    aspect-ratio: 1/1;
    display:flex;
    align-items: flex-end;
  }
  .mockup{
    width:100%;
  }
  img{
    width:100%;
    /* margin-top:-96px; */
    
  }

  .message{
    padding-inline: 2rem;
  }


  @media only screen and (min-width:1440px){
    display: flex;
    flex-direction: row-reverse;
    justify-content:space-between;
    align-items:center;
    /* overflow: visible; */
    
    .img{
      background-image: url(${bgImgDesktop});
      background-size: 153%;
      background-position: 6% 67%; 
      aspect-ratio: 11 / 9;
      position:relative;
      overflow: visible;
    }

    .mockup{
      position:absolute;
      top:0;
      right:0;
      display:flex;
      align-items: flex-end;
      justify-content: left;
      overflow: hidden;
      width:90%;
      height:fit-content;
      

    }
    img{
      
      width:100%;
      transform: translate(112px, -117px);
      transform: translate(17%, -13%);
      
    }

    .message{
      text-align: left;
      padding-inline: 0;
      padding-left:calc(154/1440*100vw);
      padding-right:calc(72/1440*100vw);

    }

    
  }
` 