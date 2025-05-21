import React from "react";
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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {GeneralProvider} from './context/GeneralContext'

export const App = () => {
  return (
    <div>
      <GeneralProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/insumos" element={<Insumos />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/facturas" element={<Facturas />} />
          <Route path="/historiales" element={<Historiales />} />
          <Route path="/graficas" element={<Graficas />} />
        </Routes>
      </BrowserRouter>
      </GeneralProvider>
    </div>
  );
};
