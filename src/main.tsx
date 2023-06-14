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


/* Estilização do thumb (arrastador) */
::-webkit-scrollbar-thumb {
  background-color: #e9e9e9;
  border-radius: 2px;
}

/* Estilização da track (trilho) */
::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}

/* Definição do tamanho da barra de rolagem */
::-webkit-scrollbar {
  width: 2px;
}

  body {
    background-color: #ffffff;
    color: #333;

    .col-xs-2 {
      width: 10%;
      font-family: "Poppins";
      font-weight: 600;
      font-size: 0.9rem;
      display: flex;
      color: rgb(80,80,80);
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    .col-xs-6 {
      width: 50%;
      display: flex;
      color: rgb(80,80,80);
      font-family: "Poppins";
      padding: 1rem;
      font-weight: 600;
      font-size: 0.9rem;
      justify-content: left;
      align-items: center;
      height: 100%;
    }

    .col-xs-4 {
      font-weight: 600;
      width: 30%;
      font-family: "Poppins";
      color: rgb(80,80,80);
      padding: 1rem;
      height: 100%;
      font-size: 0.9rem;
      display: flex;
      justify-content: left;
      align-items: center;
    }

    .col-xs-5 {
      padding: 1rem;
      font-family: "Poppins";
      width: 20%;
      font-weight: 600;
      color: rgb(80,80,80);
      display: flex;
      justify-content: center;
      font-size: 0.9rem;
      align-items: center;
      height: 100%;
    }
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
