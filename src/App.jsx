import { useContext } from "react";
import "./app.css";
import { Navbar } from "./components/Navbar";
import { Inicio } from "./Pages/Inicio";
import { Clientes } from "./Pages/Clientes";
import { Mascotas } from "./Pages/Mascotas";
import { Citas } from "./Pages/Citas";
import { Insumos } from "./Pages/Insumos";
import { Empleados } from "./Pages/Empleados";
import { Facturas } from "./Pages/Facturas";
import { Historiales } from "./Pages/Historiales";
import { Graficas } from "./Pages/Graficas";
import { Login } from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GeneralProvider } from "./context/GeneralContext";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

const AppContent = () => {
  const { user, logout, loading } = useContext(AuthContext);
  if (loading) {
  return (
    <div className="loader-container">
      <span className="loader"></span>
    </div>
  );
}

  return (
    <BrowserRouter>
      {user && <Navbar logout={logout} />}
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/inicio"
          element={
            <ProtectedRoutes isAllowed={!!user} redirecTo="/">
              <Inicio />
            </ProtectedRoutes>
          }
        />

        {/* Clientes */}
        <Route
          path="/clientes"
          element={
            <ProtectedRoutes
              isAllowed={user && (user.rol === 1 || user.rol === 4)}
              redirecTo="/"
            >
              <Clientes />
            </ProtectedRoutes>
          }
        />

        {/* Mascotas */}
        <Route
          path="/mascotas"
          element={
            <ProtectedRoutes
              isAllowed={user && (user.rol === 1 || user.rol === 4)}
              redirecTo="/"
            >
              <Mascotas />
            </ProtectedRoutes>
          }
        />

        {/* Citas */}
        <Route
          path="/citas"
          element={
            <ProtectedRoutes
              isAllowed={
                user && (user.rol === 1 || user.rol === 2 || user.rol === 4)
              }
              redirecTo="/"
            >
              <Citas />
            </ProtectedRoutes>
          }
        />

        {/* Facturas */}
        <Route
          path="/facturas"
          element={
            <ProtectedRoutes
              isAllowed={
                user && (user.rol === 1 || user.rol === 3 || user.rol === 4)
              }
              redirecTo="/"
            >
              <Facturas />
            </ProtectedRoutes>
          }
        />

        {/* Insumos */}
        <Route
          path="/insumos"
          element={
            <ProtectedRoutes
              isAllowed={
                user && (user.rol === 2 || user.rol === 3 || user.rol === 4)
              }
              redirecTo="/"
            >
              <Insumos />
            </ProtectedRoutes>
          }
        />

        {/* Historiales */}
        <Route
          path="/historiales"
          element={
            <ProtectedRoutes
              isAllowed={user && (user.rol === 2 || user.rol === 4)}
              redirecTo="/"
            >
              <Historiales />
            </ProtectedRoutes>
          }
        />

        {/* Gráficas */}
        <Route
          path="/graficas"
          element={
            <ProtectedRoutes
              isAllowed={user && (user.rol === 3 || user.rol === 4)}
              redirecTo="/"
            >
              <Graficas />
            </ProtectedRoutes>
          }
        />

        {/* Empleados */}
        <Route
          path="/empleados"
          element={
            <ProtectedRoutes isAllowed={user && user.rol === 4} redirecTo="/">
              <Empleados />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export const App = () => {
  return (
    <AuthProvider>
      <GeneralProvider>
        <AppContent />
      </GeneralProvider>
    </AuthProvider>
  );
};
