import styled from "styled-components";

export const HeaderStyled = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  height: calc(64/16*1rem);
  box-sizing: border-box;
  position:relative;
  /* z-index:777; */
  
  .logo{
    padding-left:23px;
  }

  .mobileMenu{
    padding-right:23px;
  }
`