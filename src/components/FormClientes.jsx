import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { GeneralContext } from "../context/GeneralContext";


export const FormClientes = () => {
  const {
    postCliente,
    modificarClientes,
    setModificarClientes,
    updateCliente,
  } = useContext(GeneralContext);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    if (modificarClientes) {
      console.log(modificarClientes);
      updateCliente(modificarClientes.id_cliente, data);
      setModificarClientes(null);
    } else {
      postCliente(data);
    }
    reset();
  };

  useEffect(() => {
    if (modificarClientes) {
      setValue("nombre", modificarClientes.nombre);
      setValue("apellido", modificarClientes.apellido);
      setValue("dpi", modificarClientes.dpi);
      setValue("telefono", modificarClientes.telefono);
      setValue("correo", modificarClientes.correo);
      setValue("direccion", modificarClientes.direccion);
    }
  }, [modificarClientes, setValue]);

   const handleClear = () => {
    reset();
    setModificarClientes(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="color-text mb-3">Registro de clientes</h1>
        <input
          type="text"
          className="form-control form-border mb-3"
          placeholder="Nombre"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            minLength: {
              value: 3,
              message: "El nombre debe contener más de 3 letras",
            },
            maxLength: {
              value: 10,
              message: "El nombre no debe sobrepasar las 10 letras",
            },
          })}
        />
        {errors.nombre && <p className="alerta">{errors.nombre.message}</p>}
        <input
          type="text"
          className="form-control form-border mb-3"
          placeholder="Apellido"
          {...register("apellido", {
            required: {
              value: true,
              message: "Apellido es requerido",
            },
            minLength: {
              value: 3,
              message: "El apellido debe contener más de 3 letras",
            },
            maxLength: {
              value: 10,
              message: "El apellido no debe sobrepasar las 10 letras",
            },
          })}
        />
        {errors.apellido && <p className="alerta">{errors.apellido.message}</p>}
        <input
          type="text"
          className="form-control form-border mb-3"
          placeholder="DPI"
          {...register("dpi", {
            required: {
              value: true,
              message: "DPI es requerido",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Solo se permiten números",
            },
          })}
        />
        {errors.dpi && <p className="alerta">{errors.dpi.message}</p>}
        <input
          type="text"
          className="form-control form-border mb-3"
          placeholder="Teléfono"
          {...register("telefono", {
            required: {
              value: true,
              message: "Teléfono es requerido",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Solo se permiten números",
            },
          })}
        />
        {errors.telefono && <p className="alerta">{errors.telefono.message}</p>}
        <input
          type="text"
          className="form-control form-border mb-3"
          placeholder="Correo"
          {...register("correo", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Ingrese un correo válido (ej: usuario@correo.com)",
            },
          })}
        />
        {errors.correo && <p className="alerta">{errors.correo.message}</p>}
        <input
          type="text"
          className="form-control form-border mb-4"
          placeholder="Dirección"
          {...register("direccion", {
            required: {
              value: true,
              message: "Dirección es requerido",
            },
            minLength: {
              value: 5,
              message: "La dirección debe tener más de 5 letras",
            },
            maxLength: {
              value: 100,
              message: "La dirección no debe tener más de 100 letras",
            },
          })}
        />
        {errors.direccion && (
          <p className="alerta">{errors.direccion.message}</p>
        )}
        <div>
          <button
            type="submit"
            className={modificarClientes ? "btn btn-warning" : "btn boton"}
          >
            {modificarClientes ? "Modificar" : "Registrar"}
          </button>
          {modificarClientes && (
            <button className="btn btn-success ms-3" onClick={handleClear}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
