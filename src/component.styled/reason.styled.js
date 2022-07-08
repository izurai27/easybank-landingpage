import styled from "styled-components";

export const ReasonStyled = styled.section`
  background-color: var(--lightGrayishBlue);
  text-align:center;
  padding: 60px 24px;
  display:flex;
  flex-direction: column;
  row-gap: 36px;

  .group{
    display:flex;
    flex-direction: column;
    row-gap:25px;
    justify-content: space-between;
    align-items: center;
  }

  img{
    width: calc(67/16*1rem);
  }
`