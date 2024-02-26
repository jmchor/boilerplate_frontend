import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Other global styles */

  @media (max-width: 1440px) {
    /* Media query for smaller screens */
    body {
      overflow: hidden; /* Prevent scrolling on smaller screens */
    }
  }
`;

export default GlobalStyles;
