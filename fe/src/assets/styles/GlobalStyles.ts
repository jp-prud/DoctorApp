import { createGlobalStyle } from "styled-components";

import Urbanist200 from "../fonts/Urbanist_200.ttf";
import Urbanist300 from "../fonts/Urbanist_300.ttf";
import Urbanist400 from "../fonts/Urbanist_400.ttf";
import Urbanist500 from "../fonts/Urbanist_500.ttf";
import Urbanist600 from "../fonts/Urbanist_600.ttf";
import Urbanist700 from "../fonts/Urbanist_700.ttf";
import Urbanist800 from "../fonts/Urbanist_800.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Urbanist';
    font-weight: 200;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${Urbanist200}') format('ttf'),
  }

  @font-face {
    font-family: 'Urbanist';
    font-weight: 300;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${Urbanist300}') format('ttf'),
  }

  @font-face {
    font-family: 'Urbanist';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${Urbanist400}') format('ttf'),
  }

  @font-face {
    font-family: 'Urbanist';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${Urbanist500}') format('ttf'),
  }

  @font-face {
    font-family: 'Urbanist';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${Urbanist600}') format('ttf'),
  }

  @font-face {
    font-family: 'Urbanist';
    font-weight: 700;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${Urbanist700}') format('ttf'),
  }

  @font-face {
    font-family: 'Urbanist';
    font-weight: 800;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${Urbanist800}') format('ttf'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: GeneralSans, sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: ${({ theme }) => theme.COLORS.GRAY_100};
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  button {
    cursor: pointer;
    font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.GRAY_500};

  }
`;
