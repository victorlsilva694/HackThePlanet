import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  body {
    background-color: #ffffff;
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

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={routes} />
  </React.StrictMode>,
  document.getElementById("root")
);
