
import { createContext, useState, useEffect } from "react";
export const GeneralContext = createContext();
import Swal from "sweetalert2";


export const GeneralProvider = ({ children }) => {
  const [servicios, setServicios] = useState([]);
  const [metodos, setMetodos] = useState([]);
  const [roles, setRoles] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [modificarClientes, setModificarClientes] = useState(null);
  const [mascotas, setMascotas] = useState([]);
  const [modificarMascota, setModificarMascota] = useState(null);
  const [citas, setCitas] = useState([]);
  const [modificarCitas, setModificarCitas] = useState(null);
  const [insumos, setInsumos] = useState([]);
  const [modificarInsumos, setModificarInsumos] = useState(null);
  const [empleados, setEmpleados] = useState([]);
  const [modificarEmpleados, setModificarEmpleados] = useState(null);
  const [facturas, setFacturas] = useState([]);
  const [modificarFacturas, setModificarFacturas] = useState(null);
  const [historiales, setHistoriales] = useState([]);
  const [modificarHistoriales, setModificarHistoriales] = useState(null);

  const getClientes = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/clientes`);

      if (!response.ok) {
        throw new Error("Error al recuperar datos");
      }

      const data = await response.json();
      setClientes(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    getClientes();
  }, []);

  const postCliente = async (cliente) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/clientes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      });
      if (!response.ok) {
        throw new Error("Error al agregar cliente");
      }
      getClientes();
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "El cliente fue agregado correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  const updateCliente = async (id, cliente) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/clientes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      });
      if (!response.ok) {
        throw new Error("Error al modificar cliente");
      }
      getClientes();
      Swal.fire({
        title: "¡Modificacion exitosa!",
        text: "El cliente fue modificado correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  const deleteCliente = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/clientes/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar cliente");
      }
      getClientes();
      Swal.fire({
        title: "¡Registro eliminado!",
        text: "El cliente fue eliminado correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  // Mascotas
  const getMascotas = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/mascotas`);

      if (!response.ok) {
        throw new Error("Error al recuperar datos");
      }

      const data = await response.json();
      setMascotas(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    getMascotas();
  }, []);

  const postMascota = async (mascota) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/mascotas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mascota),
      });
      if (!response.ok) {
        throw new Error("Error al agregar cliente");
      }
      getMascotas();
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "La mascota fue agregada correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  const updateMascota = async (id, mascota) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/mascotas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mascota),
      });
      if (!response.ok) {
        throw new Error("Error al modificar cliente");
      }
      getMascotas();
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Modificación exitosa.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  const deleteMascota = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/mascotas/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar cliente");
      }
      getMascotas();
      Swal.fire({
        title: "¡Registro eliminado!",
        text: "Mascota eliminada correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  //Servicios
  const getServicios = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/servicios`);

      if (!response.ok) {
        throw new Error("Error al recuperar datos");
      }

      const data = await response.json();
      setServicios(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    getServicios();
  }, []);

  //metodos
  const getMetodos = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/metodos`);

      if (!response.ok) {
        throw new Error("Error al recuperar datos");
      }

      const data = await response.json();
      setMetodos(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    getMetodos();
  }, []);

  //roles
  const getRoles = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/roles`);

      if (!response.ok) {
        throw new Error("Error al recuperar datos");
      }

      const data = await response.json();
      setRoles(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    getRoles();
  }, []);

  // Citas
  const getCitas = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/citas`);

      if (!response.ok) {
        throw new Error("Error al recuperar datos");
      }

      const data = await response.json();
      setCitas(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    getCitas();
  }, []);

  const postCita = async (cita) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/citas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cita),
      });
      if (!response.ok) {
        throw new Error("Error al agregar cliente");
      }
      getCitas();
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Cita agregada correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  const updateCita = async (id, mascota) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/citas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mascota),
      });
      if (!response.ok) {
        throw new Error("Error al modificar cliente");
      }
      getCitas();
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Cita modificada correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  const deleteCita = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/citas/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar cliente");
      }
      getCitas();
      Swal.fire({
        title: "¡Registro eliminado!",
        text: "Cita eliminada correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  //Insumos
  const getInsumos = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/insumos`);

      if (!response.ok) {
        throw new Error("Error al recuperar datos");
      }

      const data = await response.json();
      setInsumos(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    getInsumos();
  }, []);

  const postInsumo = async (insumo) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/insumos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(insumo),
      });
      if (!response.ok) {
        throw new Error("Error al agregar cliente");
      }
      getInsumos();
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Insumo agregado correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  const updateInsumo = async (id, insumo) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/insumos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(insumo),
      });
      if (!response.ok) {
        throw new Error("Error al modificar cliente");
      }
      getInsumos();
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Insumo modificado correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  const deleteInsumo = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/insumos/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar cliente");
      }
      getInsumos();
      Swal.fire({
        title: "¡Operación exitosa!",
        text: "Insumo eliminado correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  //Empleados
  const getEmpleados = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/empleados`);

      if (!response.ok) {
        throw new Error("Error al recuperar datos");
      }

      const data = await response.json();
      setEmpleados(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    getEmpleados();
  }, []);

  const postEmpleados = async (empleado) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/empleados`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(empleado),
      });
      if (!response.ok) {
        throw new Error("Error al agregar cliente");
      }
      getEmpleados();
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Empleado agregado correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  const updateEmpleados = async (id, empleado) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/empleados/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(empleado),
      });
      if (!response.ok) {
        throw new Error("Error al modificar cliente");
      }
      getEmpleados();
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Empleado modificado correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  const deleteEmpleados = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/empleados/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar cliente");
      }
      getEmpleados();
      Swal.fire({
        title: "¡Operación exitosa!",
        text: "Empleado eliminado correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  //Facturas
  const getFacturas = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/facturas`);

      if (!response.ok) {
        throw new Error("Error al recuperar datos");
      }

      const data = await response.json();
      setFacturas(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    getFacturas();
  }, []);

  const postFacturas = async (factura) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/facturas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(factura),
      });
      if (!response.ok) {
        throw new Error("Error al agregar factura");
      }
      getFacturas();
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Factura agregado correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  const updateFacturas = async (id, factura) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/facturas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(factura),
      });
      if (!response.ok) {
        throw new Error("Error al modificar factura");
      }
      getFacturas();
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Factura modificada correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  const deleteFacturas = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/facturas/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar factura");
      }
      getFacturas();
      Swal.fire({
        title: "¡Operación exitosa!",
        text: "Factura eliminada correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  //Historiales
  const getHistoriales = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/historiales`);

      if (!response.ok) {
        throw new Error("Error al recuperar datos");
      }

      const data = await response.json();
      setHistoriales(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    getHistoriales();
  }, []);

  const postHistoriales = async (historiales) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/historiales`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(historiales),
      });
      if (!response.ok) {
        throw new Error("Error al agregar factura");
      }
      getHistoriales();
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Historial agregado correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  const updateHistoriales = async (id, historial) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/historiales/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(historial),
      });
      if (!response.ok) {
        throw new Error("Error al modificar factura");
      }
      getHistoriales();
      Swal.fire({
        title: "¡Registro exitoso!",
        text: "Historial modificado correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  const deleteHistoriales = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/historiales/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar factura");
      }
      getHistoriales();
      Swal.fire({
        title: "¡Operación exitosa!",
        text: "Factura eliminada correctamente.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire({
        title: "¡Error!",
        text: "Algo falló",
        icon: "error",
      });
    }
  };

  return (
    <GeneralContext.Provider
      value={{
        servicios,
        roles,
        clientes,
        deleteCliente,
        postCliente,
        updateCliente,
        setModificarClientes,
        modificarClientes,
        mascotas,
        deleteMascota,
        postMascota,
        updateMascota,
        setModificarMascota,
        modificarMascota,
        citas,
        postCita,
        updateCita,
        deleteCita,
        setModificarCitas,
        modificarCitas,
        insumos,
        postInsumo,
        updateInsumo,
        deleteInsumo,
        setModificarInsumos,
        modificarInsumos,
        metodos,

        empleados,
        postEmpleados,
        updateEmpleados,
        deleteEmpleados,
        setModificarEmpleados,
        modificarEmpleados,

        facturas,
        postFacturas,
        updateFacturas,
        deleteFacturas,
        setModificarFacturas,
        modificarFacturas,

        historiales,
        postHistoriales,
        updateHistoriales,
        deleteHistoriales,
        setModificarHistoriales,
        modificarHistoriales,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
