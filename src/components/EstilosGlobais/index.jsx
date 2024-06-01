import { createGlobalStyle } from "styled-components";
import solar from "../../assets/solar.png";

const EstilosGlobais = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Roboto", sans-serif;
        font-size: 1.1rem;
        color: #000;
        background: #FFF;
        background: url(${solar}) center / cover no-repeat fixed;
        color: #fff;
    }
`;

export default EstilosGlobais;
