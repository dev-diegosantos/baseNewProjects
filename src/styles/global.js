import PoppinsBlack from "../assets/fonts/Poppins-Black.ttf";
import PoppinsBlackItlic from "../assets/fonts/Poppins-BlackItalic.ttf";
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf";
import PoppinsBoldItalic from "../assets/fonts/Poppins-BoldItalic.ttf";
import PoppinsItalic from "../assets/fonts/Poppins-Italic.ttf";
import PoppinsLight from "../assets/fonts/Poppins-Light.ttf";
import PoppinsLightItalic from "../assets/fonts/Poppins-LightItalic.ttf";
import PoppinsMedium from "../assets/fonts/Poppins-Medium.ttf";
import PoppinsMediumItalic from "../assets/fonts/Poppins-MediumItalic.ttf";
import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: none !important;
    box-sizing: border-box;
  }


  html, body, #root {
    height: 100%;
  }


  @font-face {
    font-family: 'PoppinsBlack';
    font-display: block;
    src: url('${PoppinsBlack}') format('opentype');
  }
  @font-face {
    font-family: 'PoppinsBlackItlic';
    font-display: block;
    src: url('${PoppinsBlackItlic}') format('opentype');
  }
  @font-face {
    font-family: 'PoppinsBold';
    font-display: block;
    src: url('${PoppinsBold}') format('opentype');
  }
  @font-face {
    font-family: 'PoppinsBoldItalic';
    font-display: block;
    src: url('${PoppinsBoldItalic}') format('opentype');
  }
  @font-face {
    font-family: 'PoppinsItalic';
    font-display: block;
    src: url('${PoppinsItalic}') format('opentype');
  }
  @font-face {
    font-family: 'PoppinsLight';
    font-display: block;
    src: url('${PoppinsLight}') format('opentype');
  }
  @font-face {
    font-family: 'PoppinsLightItalic';
    font-display: block;
    src: url('${PoppinsLightItalic}') format('opentype');
  }
  @font-face {
    font-family: 'PoppinsMedium';
    font-display: block;
    src: url('${PoppinsMedium}') format('opentype');
  }
  @font-face {
    font-family: 'PoppinsMediumItalic';
    font-display: block;
    src: url('${PoppinsMediumItalic}') format('opentype');
  }
  @font-face {
    font-family: 'PoppinsRegular';
    font-display: block;
    src: url('${PoppinsRegular}') format('opentype');
  }




  html{
    scroll-behavior: smooth;
  }
  body {
    font-family: "PoppinsRegular", sans-serif; 
  }
`;
