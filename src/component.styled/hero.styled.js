import styled from "styled-components";
import bgImg from '../images/bg-intro-mobile.svg'
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

  img{
    width:100%;
    /* margin-top:-96px; */
    
  }

  .message{
    padding-inline: 2rem;
  }

`