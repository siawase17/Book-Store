import { createGlobalStyle } from "styled-components";
import "sanitize.css";
import { ThemeName } from "./theme";

interface Props {
    themeName: ThemeName;
};

export const GlobalStyle = createGlobalStyle<Props>`
    @font-face {
        font-family: 'GangwonEdu_OTFBoldA';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: ${(props) => (props.themeName === "light" ? "white" : "black")};
        color: ${(props) => (props.themeName === "light" ? "black" : "white")};
    }

    h1 {
        margin: 0;
    }

    * {
        box-sizing: border-box;
        font-family: 'GangwonEdu_OTFBoldA', sans-serif;
    }
`;
