import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   @font-face {
      font-family: 'Alcova CC';
      src: url("./Assets/Fonts/alcova_cc_regular.ttf") format('truetype');
      font-weight: 400; // Regular
      font-style: normal;
   }

   @font-face {
      font-family: 'Alcova CC';
      src: url("./Assets/Fonts/alcova_cc_bold.ttf") format('truetype');
      font-weight: 700; // Bold
      font-style: normal;
   }

   @font-face {
      font-family: 'Alcova CC';
      src: url("./Assets/Fonts/alcova_cc_light.ttf") format('truetype');
      font-weight: 300; // Light
      font-style: normal;
   }
`;
