import styled from "styled-components";

export const HeaderStyled = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  box-sizing: border-box;
  position:relative;
  z-index:777;
  
  .logo{
    padding-left:20px;
  }

  .mobileMenu{
    padding-right:20px;
  }
`