import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  Padding_main: "18px",
};

export const GlobalStyled = createGlobalStyle`
${reset}

*{box-sizing: border-box;
}

body{
  color: #fff;
  letter-spacing: -1px;
}

img{
  width: 100%;
  display: block;
}

a{
  text-decoration: none;
  color: #000;
}

ul, li{
  list-style: none;
}

`;
