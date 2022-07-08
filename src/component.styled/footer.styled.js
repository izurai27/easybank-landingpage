import styled from "styled-components"

export const FooterStyled = styled.footer`
  background-color: var(--darkBlue);
  color:#fff;
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 2rem;
  padding:calc(37/16*1rem);
  font-size: calc(15/16*1rem);

  ul{
    display:flex;
    flex-direction: column;
    row-gap: calc(20/16*1rem);
  }

  .socmed{
    display: flex;
    column-gap: 1rem;
  }
  li{
    cursor:pointer;
  }
  
`