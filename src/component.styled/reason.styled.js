import styled from "styled-components";

export const ReasonStyled = styled.section`
  background-color: var(--lightGrayishBlue);
  text-align:center;
  padding: calc(73/16*1rem) calc(24/16*1rem);
  display:flex;
  flex-direction: column;
  row-gap: calc(55/16*1rem);

  .title{
    display:flex;
    flex-direction: column;
    row-gap:calc(16/16*1rem);
    justify-content: space-between;
    align-items: center;
  }

  .group{
    display:flex;
    flex-direction: column;
    row-gap:calc(27/16*1rem);
    justify-content: space-between;
    align-items: center;
  }

  img{
    width: calc(70/16*1rem);
  }

  .cards{
    display: flex;
    flex-direction: column;
    row-gap:calc(25/16*1rem);

  }


  @media only screen and (min-width:765px){
    align-items: flex-start;
    padding: calc(105/16*1rem) 10rem;
    row-gap: calc(73/16*1rem);

    .cards{
      flex-direction: row;
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