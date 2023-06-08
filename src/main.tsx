import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { AxiosProvider } from "./Providers/AxiosProvider";
import Dashboard from "./Pages/Dashboard";
import { AuthProvider } from "./UserContextStore/AuthProvider";
import { DashboardProvider } from "./DashboardContextStore/DashboardProvider";

// Defina suas rotas públicas e privadas
const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

// Verifica se o token existe no localStorage
function isAuthenticated() {
  const token = localStorage.getItem("token_ga_profile");
  return token !== null && token !== undefined;
}

// Define um componente de rota privada
function PrivateRoute({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) {
  return isAuthenticated() ? (
    <Route path={path} element={children} />
  ) : (
    <Navigate to="/login" replace />
  );
}

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

ReactDOM.render(
  <AxiosProvider>
    <React.StrictMode>
      <DashboardProvider>
        <AuthProvider>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route
                path="/*"
                element={
                  isAuthenticated() ? <PrivateRoutes /> : <PublicRoutes />
                }
              />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </DashboardProvider>
      ,
    </React.StrictMode>
  </AxiosProvider>,
  document.getElementById("root")
);

export default GlobalStyle;

// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//     font-family: sans-serif;
//   }

//   body {
//     background-color: #ffffff;
//     color: #333;
//   }

//   a {
//     text-decoration: none;
//     &:hover {
//       text-decoration: none;
//     }
//   }
// `;
