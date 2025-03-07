import { addWeeks, format } from "date-fns";
import { readFileSync } from "fs";
// import marked from "marked";
import { sanitizeHtml } from "./sanitizer";
import { ParsedRequest } from "./types";
// const twemoji = require("twemoji");
// const twOptions = { folder: "svg", ext: ".svg" };
// const emojify = (text: string) => twemoji.parse(text, twOptions);

const rglr = readFileSync(`${__dirname}/../_fonts/Inter-Regular.woff2`).toString("base64");
const bold = readFileSync(`${__dirname}/../_fonts/Inter-Bold.woff2`).toString("base64");
const mono = readFileSync(`${__dirname}/../_fonts/Vera-Mono.woff2`).toString("base64");

function getCss(theme: string, fontSize: string) {
  // let background = "white";
  // let foreground = "black";
  let radial = "lightgray";

  if (theme === "dark") {
    //   background = "black";
    //   foreground = "white";
    radial = "dimgray";
  }
  return `
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${rglr}) format('woff2');
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: bold;
        src: url(data:font/woff2;charset=utf-8;base64,${bold}) format('woff2');
    }

    @font-face {
        font-family: 'Vera';
        font-style: normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${mono})  format("woff2");
    }
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background: #F7FBFD;
        // background-image: radial-gradient(circle at 25px 25px, ${radial} 2%, transparent 0%), radial-gradient(circle at 75px 75px, ${radial} 2%, transparent 0%);
        // background-size: 100px 100px;
        height: 100vh;
        display: flex;
        text-align: center;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    .altcampus-logo {
        height: 10vh;
        width: auto;
    }

    code {
        color: #D400FF;
        font-family: 'Vera';
        white-space: pre-wrap;
        letter-spacing: -5px;
    }

    code:before, code:after {
        content: '\`';
    }

    .logo {
        margin: 0 75px;
    }

    .plus {
        color: #BBB;
        font-family: Times New Roman, Verdana;
        font-size: 100px;
    }

    .spacer {
        margin: 150px;
    }

    .emoji {
        height: 1em;
        width: 1em;
        margin: 0 .05em 0 .1em;
        vertical-align: -0.1em;
    }
    
    .heading {
        font-family: 'Inter', sans-serif;
        font-size: ${sanitizeHtml(fontSize)};
        font-style: normal;
        color: rgba(50, 50, 93, 1);
        margin: 7rem 0;
    }
    
    .description {
        font-size: calc(${sanitizeHtml(fontSize)}/2);
        color: rgba(50, 50, 93, 1);
        line-height: normal;
        margin: 0;
    }
    .description small {
        font-size: 3rem;
        color: rgb(75, 85, 99);
    }
    .description h2 {
        color: #6773E5;
        font-size: 5rem;
        margin: 2rem 0;
    }
    `;
}

export function getHtml(parsedReq: ParsedRequest) {
  const { theme = "light", fontSize = "125px", weeks } = parsedReq;
  const courseFinishDate = addWeeks(new Date(), weeks);

  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(theme, fontSize)}
    </style>
    <body>
            <div class="logo-wrapper">
                <svg class="altcampus-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.8 296.31">
                    <title>Asset 20</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                        <g>
                            <g>
                            <path
                                fill="#37b667"
                                d="M252.31,296.31H44a44.05,44.05,0,0,1-44-44V44A44.05,44.05,0,0,1,44,0H210.46a12,12,0,0,1,0,24H44A20,20,0,0,0,24,44V252.31a20,20,0,0,0,20,20H252.31a20,20,0,0,0,20-20v-168a12,12,0,0,1,24,0v168A44.05,44.05,0,0,1,252.31,296.31Z"
                            ></path>
                            <g>
                                <path
                                fill="#37b667"
                                d="M121.65,214.39a6.18,6.18,0,0,1-5.9-4.32h0a33.92,33.92,0,0,1-1.09-4.48,31.28,31.28,0,0,1-9.85,7.55A29.47,29.47,0,0,1,91.54,216q-12.38,0-19.66-6.73T64.61,191q0-11.83,9.5-18.29T102,166.2h11.6v-8.25q0-6.07-3.5-9.42t-10.35-3.35a24.55,24.55,0,0,0-6.93.9q-1.14.34-2.12.72a5.25,5.25,0,0,0-3.22,4L87.27,152a6.28,6.28,0,0,1-6.19,5.26H75.58a6.28,6.28,0,0,1-6.28-6.3l0-4.08A14.22,14.22,0,0,1,77.47,134q2.94-1.37,6.18-2.53a51.8,51.8,0,0,1,17.56-2.88q15.65,0,25.42,7.67t9.77,21.84v34.8q0,1.95,0,3.66a25.92,25.92,0,0,0,.27,3.27l1.49.2a6.28,6.28,0,0,1,5.44,6.22v1.86a6.28,6.28,0,0,1-6.28,6.28Zm-24-15.18a19.83,19.83,0,0,0,14.11-5.67,6.2,6.2,0,0,0,1.78-4.38v-4.3a6.28,6.28,0,0,0-6.28-6.28H102q-7.24,0-11,3.39a10.6,10.6,0,0,0-3.74,8.14,8.42,8.42,0,0,0,2.76,6.7Q92.79,199.21,97.69,199.21Z"
                                ></path>
                                <path
                                fill="#37b667"
                                d="M148.92,100.44h0a7.5,7.5,0,0,1,7.5-7.5h19.87a7.5,7.5,0,0,1,7.5,7.5v98l5,1.07a7.5,7.5,0,0,1,5.94,7.34v0a7.5,7.5,0,0,1-7.5,7.5H157.59a7.5,7.5,0,0,1-7.5-7.5v0A7.5,7.5,0,0,1,156,199.5l5-1.07V109L155,107.81A7.5,7.5,0,0,1,148.92,100.44Z"
                                ></path>
                                <path
                                fill="#37b667"
                                d="M235.72,113.44v16.72H246.6a3.91,3.91,0,0,1,3.91,3.91v8.13a3.91,3.91,0,0,1-3.91,3.91H235.72V189q0,4.9,2,7a7.21,7.21,0,0,0,5.45,2.1,37.5,37.5,0,0,0,4.09-.19h0a3.94,3.94,0,0,1,4.38,3.42l1.07,9a3.91,3.91,0,0,1-2.94,4.26q-2.12.51-4.22.84a52.5,52.5,0,0,1-8.1.58q-11.76,0-18.1-6.46t-6.34-20.47v-43H204.6a3.91,3.91,0,0,1-3.91-3.91v-8.13a3.91,3.91,0,0,1,3.91-3.91h8.46V113.44a3.91,3.91,0,0,1,3.91-3.91h14.82A3.91,3.91,0,0,1,235.72,113.44Z"
                                ></path>
                            </g>
                            </g>
                            <g>
                            <path
                                fill="#37b667"
                                d="M384.54,188.4A7.59,7.59,0,0,1,391.48,199a26.07,26.07,0,0,1-7,9.63Q375.88,216,361.88,216q-15.31,0-24.09-10.31T329,177.41v-4.87a47.73,47.73,0,0,1,4-20.23,30.32,30.32,0,0,1,11.57-13.43,32.4,32.4,0,0,1,17.47-4.68q13.78,0,22.2,7.38A27.08,27.08,0,0,1,391.63,152a7.55,7.55,0,0,1-7.07,10.29h-.64a7.63,7.63,0,0,1-7.27-5.48,12.74,12.74,0,0,0-3.32-5.7q-3.69-3.47-11.24-3.47-8.2,0-12.28,5.88t-4.18,18.24v6q0,12.91,3.91,18.87t12.33,6q7.6,0,11.35-3.47a12.44,12.44,0,0,0,3.28-5.34,7.69,7.69,0,0,1,7.25-5.4Z"
                            ></path>
                            <path
                                fill="#37b667"
                                d="M461.64,198.52H432.87l-3.74,11.23a7.57,7.57,0,0,1-7.18,5.17h-1.1a7.57,7.57,0,0,1-7.09-10.21l24-64.49a7.57,7.57,0,0,1,7.09-4.93h4.7a7.57,7.57,0,0,1,7.09,4.91l24.14,64.49a7.57,7.57,0,0,1-7.09,10.22h-1.1a7.57,7.57,0,0,1-7.17-5.15ZM437.3,185.23h19.91l-10-29.8Z"
                            ></path>
                            <path
                                fill="#37b667"
                                d="M527.25,140.34l18.67,52.71,18.56-52.7a7.57,7.57,0,0,1,7.14-5.05h8.62a7.57,7.57,0,0,1,7.57,7.57v64.49a7.57,7.57,0,0,1-7.57,7.57h-1.33a7.57,7.57,0,0,1-7.57-7.57v-14.2L573,155.59,553.3,209.94a7.57,7.57,0,0,1-7.11,5h-.65a7.57,7.57,0,0,1-7.12-5l-19.63-54.29,1.64,37.52v14.2a7.57,7.57,0,0,1-7.57,7.57h-1.27a7.57,7.57,0,0,1-7.57-7.57V142.87a7.57,7.57,0,0,1,7.57-7.57h8.52A7.57,7.57,0,0,1,527.25,140.34Z"
                            ></path>
                            <path
                                fill="#37b667"
                                d="M630.53,186.87v20.49a7.57,7.57,0,0,1-7.57,7.57h-1.27a7.57,7.57,0,0,1-7.57-7.57V142.87a7.57,7.57,0,0,1,7.57-7.57h23.5A35.94,35.94,0,0,1,661,138.58a24.19,24.19,0,0,1,10.47,9.32,26,26,0,0,1,3.66,13.75q0,11.7-8,18.46t-22.18,6.75Zm0-13.29h14.66q6.51,0,9.93-3.06t3.42-8.75a13.13,13.13,0,0,0-3.45-9.46q-3.45-3.61-9.52-3.72h-15Z"
                            ></path>
                            <path
                                fill="#37b667"
                                d="M751,135.3a7.57,7.57,0,0,1,7.57,7.57v44.88q0,13.07-8.18,20.67T728.1,216q-13.95,0-22.15-7.38t-8.37-20.29V142.87a7.57,7.57,0,0,1,7.57-7.57h1.27a7.57,7.57,0,0,1,7.57,7.57v45q0,7.82,3.75,11.4t10.36,3.58q13.84,0,14.05-14.55V142.87a7.57,7.57,0,0,1,7.57-7.57Z"
                            ></path>
                            <path
                                fill="#37b667"
                                d="M825.34,194a8.42,8.42,0,0,0-3.28-7.14q-3.28-2.49-11.81-5.25a83.68,83.68,0,0,1-13.51-5.44q-13.56-7.33-13.56-19.74A19.23,19.23,0,0,1,786.81,145a23.72,23.72,0,0,1,10.45-7.9,39.32,39.32,0,0,1,15.29-2.84,35.79,35.79,0,0,1,15.2,3.09A24.21,24.21,0,0,1,838.11,146q.53.81,1,1.66a7.57,7.57,0,0,1-6.68,11.14h-.95a7.54,7.54,0,0,1-6.93-4.86,9.59,9.59,0,0,0-2.58-3.64q-3.45-3-9.68-3-6,0-9.35,2.54a8,8,0,0,0-3.34,6.7q0,3.88,3.91,6.51A44.16,44.16,0,0,0,815,168q14,4.21,20.4,10.45a20.8,20.8,0,0,1,6.4,15.53q0,10.34-7.82,16.21T812.92,216a40.66,40.66,0,0,1-16.73-3.36,26.47,26.47,0,0,1-11.51-9.21,22.55,22.55,0,0,1-1.52-2.59,7.58,7.58,0,0,1,6.77-11h.84a7.45,7.45,0,0,1,7.13,5q2.65,8.14,15,8.14,5.85,0,9.13-2.38A7.74,7.74,0,0,0,825.34,194Z"
                            ></path>
                            </g>
                        </g>
                        </g>
                    </g>
                </svg>
            </div>
            <h1 class="heading">
                Kab Banoge Developer?
            </h1>
            <footer class="description">
                <small>By</small>
                <h2>${format(courseFinishDate, "dd MMMM yyyy")} </h2>
                <p>You'll be a software developer</p>
            </footer>
    </body>
</html>`;
}

// function getImage(src: string, width = "auto", height = "225") {
//   return `<img
//         class="logo"
//         alt="Generated Image"
//         src="${sanitizeHtml(src)}"
//         width="${sanitizeHtml(width)}"
//         height="${sanitizeHtml(height)}"
//     />`;
// }

// function getPlusSign(i: number) {
//   return i === 0 ? "" : '<div class="plus">+</div>';
// }
