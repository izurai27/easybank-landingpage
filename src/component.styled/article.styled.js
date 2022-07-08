import styled from "styled-components";

export const ArticleStyled = styled.article`
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--veryLightGray);
  row-gap: calc(23/16*1rem);
  padding-top:calc(86/16*1rem);

  .article-item{
    display: flex;
    flex-direction: column;
    width:calc(301/375*100%);
    overflow:hidden;
    border-radius: 10px;
    background-color: white;

  }

  .caption{
    padding:calc(29/16*1rem);
    display: flex;
    flex-direction: column;
    row-gap: 11px;
  }

  cite{
    font-size:calc(10/16*1rem);
  }
`