import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root{
  /* ## Colors*/

  --darkBlue: hsl(233, 26%, 24%);
  --limeGreen: hsl(136, 65%, 51%);
  --brightCyan: hsl(192, 70%, 51%);

/* ### Neutral */

--grayishBlue: hsl(233, 8%, 62%);
--lightGrayishBlue: hsl(220, 16%, 96%);
--veryLightGray: hsl(0, 0%, 98%);
--white: hsl(0, 0%, 100%);
--breakpoint:1440px;
} 
 
 
body{
  /* ## Typography */
  /* ### Body Copy */
  
  font-size: calc(18/16*1rem);
  font-family: 'Public Sans', sans-serif;
  /* overflow: hidden; */
}

h1{
  font-size:calc(42/16*1rem);
  letter-spacing: -0.04em;
  color: var(--darkBlue);
  
}

p{
  font-size:1rem;
  letter-spacing:-0.04em;
  color:var(--grayishBlue);
  line-height:106%;
  /* margin-top:1rem;
  margin-bottom:1rem; */
}

button{
  width:calc(162/16*1rem);
  border:none;
  height:calc(46/16*1rem);
  border-radius:calc(32/16*1rem);
  background-image: linear-gradient(135deg, var(--limeGreen), var(--brightCyan));
  color:white;
  cursor:pointer;
}

h2{
  font-size:calc(20/16*1rem);
  letter-spacing: -0.06em;
  color:var(--darkBlue);
}
`