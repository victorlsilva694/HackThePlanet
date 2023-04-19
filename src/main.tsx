import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const routes = createRoutesFromElements(<Route path="/" element={<App />} />);

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  body {
    background-color: #f2f2f2;
    color: #333;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;

const router = createBrowserRouter(routes);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
