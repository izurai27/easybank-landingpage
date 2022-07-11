import styled from "styled-components";

export const ReasonStyled = styled.section`
  background-color: var(--lightGrayishBlue);
  text-align:center;
  padding: 60px 24px;
  display:flex;
  flex-direction: column;
  row-gap: calc(36/16*1rem);

  .title,.group{
    display:flex;
    flex-direction: column;
    row-gap:25px;
    justify-content: space-between;
    align-items: center;
  }

  img{
    width: calc(67/16*1rem);
  }


  @media only screen and (min-width:765px){
    align-items: flex-start;
    padding: calc(105/16*1rem) 10rem;
    row-gap: calc(73/16*1rem);

    .cards{
      display:flex;
      column-gap: 2rem;
    }

    .group{
      text-align: left;
      align-items: flex-start;
      
    }

    .title{
      align-items: flex-start;
      width:calc(800/1440*100%);
      text-align: left;
      row-gap:calc(41/16*1rem);
    }
  }

`