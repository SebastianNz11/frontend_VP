import { createContext, useState, useEffect } from "react";
export const GeneralContext = createContext();

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
      const response = await fetch("http://localhost:4000/clientes");

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
      const response = await fetch("http://localhost:4000/clientes", {
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
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const updateCliente = async (id, cliente) => {
    try {
      const response = await fetch(`http://localhost:4000/clientes/${id}`, {
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
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const deleteCliente = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/clientes/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar cliente");
      }
      getClientes();
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Mascotas
  const getMascotas = async () => {
    try {
      const response = await fetch("http://localhost:4000/mascotas");

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
      const response = await fetch("http://localhost:4000/mascotas", {
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
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const updateMascota = async (id, mascota) => {
    try {
      const response = await fetch(`http://localhost:4000/mascotas/${id}`, {
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
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const deleteMascota = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/mascotas/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar cliente");
      }
      getMascotas();
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  //Servicios
  const getServicios = async () => {
    try {
      const response = await fetch("http://localhost:4000/servicios");

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
        const response = await fetch("http://localhost:4000/metodos");
  
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

  //metodos
  const getRoles = async () => {
    try {
      const response = await fetch("http://localhost:4000/roles");

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
    const response = await fetch("http://localhost:4000/citas");

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
    const response = await fetch("http://localhost:4000/citas", {
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
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const updateCita = async (id, mascota) => {
  try {
    const response = await fetch(`http://localhost:4000/citas/${id}`, {
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
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const deleteCita = async (id) => {
  try {
    const response = await fetch(`http://localhost:4000/citas/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar cliente");
    }
    getCitas();
  } catch (error) {
    console.error("Error:", error.message);
  }
};

//Insumos
const getInsumos = async () => {
  try {
    const response = await fetch("http://localhost:4000/insumos");

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
    const response = await fetch("http://localhost:4000/insumos", {
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
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const updateInsumo = async (id, insumo) => {
  try {
    const response = await fetch(`http://localhost:4000/insumos/${id}`, {
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
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const deleteInsumo = async (id) => {
  try {
    const response = await fetch(`http://localhost:4000/insumos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar cliente");
    }
    getInsumos();
  } catch (error) {
    console.error("Error:", error.message);
  }
};

//Empleados
const getEmpleados = async () => {
  try {
    const response = await fetch("http://localhost:4000/empleados");

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
    const response = await fetch("http://localhost:4000/empleados", {
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
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const updateEmpleados = async (id, empleado) => {
  try {
    const response = await fetch(`http://localhost:4000/empleados/${id}`, {
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
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const deleteEmpleados = async (id) => {
  try {
    const response = await fetch(`http://localhost:4000/empleados/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar cliente");
    }
    getEmpleados();
  } catch (error) {
    console.error("Error:", error.message);
  }
};

//Facturas 
const getFacturas = async () => {
  try {
    const response = await fetch("http://localhost:4000/facturas");

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
    const response = await fetch("http://localhost:4000/facturas", {
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
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const updateFacturas = async (id, factura) => {
  try {
    const response = await fetch(`http://localhost:4000/facturas/${id}`, {
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
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const deleteFacturas = async (id) => {
  try {
    const response = await fetch(`http://localhost:4000/facturas/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar factura");
    }
    getFacturas();
  } catch (error) {
    console.error("Error:", error.message);
  }
};

//Historiales
const getHistoriales = async () => {
  try {
    const response = await fetch("http://localhost:4000/historiales");

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
    const response = await fetch("http://localhost:4000/historiales", {
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
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const updateHistoriales = async (id, historial) => {
  try {
    const response = await fetch(`http://localhost:4000/historiales/${id}`, {
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
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const deleteHistoriales = async (id) => {
  try {
    const response = await fetch(`http://localhost:4000/historiales/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar factura");
    }
    getHistoriales();
  } catch (error) {
    console.error("Error:", error.message);
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
