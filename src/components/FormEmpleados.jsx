import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { GeneralContext } from "../context/GeneralContext";

export const FormEmpleados = () => {
  const {
    postEmpleados,
    modificarEmpleados,
    setModificarEmpleados,
    updateEmpleados,
    roles,
  } = useContext(GeneralContext);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (modificarEmpleados) {
      console.log(modificarEmpleados);
      updateEmpleados(modificarEmpleados.id_empleado, data);
      setModificarEmpleados(null);
    } else {
      console.log(data);
      postEmpleados(data);
    }
    reset();
  };

  useEffect(() => {
    if (modificarEmpleados) {
      setValue("nombre", modificarEmpleados.nombre);
      setValue("apellido", modificarEmpleados.apellido);
      setValue("id_rol", modificarEmpleados.id_rol);
    }
  }, [modificarEmpleados, setValue]);

  const handleClear = () => {
    reset();
    setModificarEmpleados(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="color-text mb-3">Registro de Empleados</h1>

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

        <select
          id="miSelect"
          className="form-select form-border mb-3 color-text"
          {...register("id_rol", { required: "Seleccione un rol" })}
        >
          <option value="" hidden>
            Seleccione un rol
          </option>
          {roles.map((opcion) => (
            <option key={opcion.id_rol} value={opcion.id_rol}>
              {opcion.rol}
            </option>
          ))}
        </select>
        {errors.id_cliente && (
          <p className="alerta mt-2">{errors.id_cliente.message}</p>
        )}

        <input
          type="text"
          className="form-control form-border mb-3"
          placeholder="Contraseña"
          {...register("contra", {
            required: {
              value: true,
              message: "Contraseña es requerido",
            },
            minLength: {
              value: 2,
              message: "La contraseña debe contener más de 2 letras",
            },
            maxLength: {
              value: 10,
              message: "La contraseña no debe sobrepasar las 10 letras",
            },
          })}
        />
        {errors.contra && <p className="alerta">{errors.contra.message}</p>}

        <div>
          <button
            type="submit"
            className={modificarEmpleados ? "btn btn-warning" : "btn boton"}
          >
            {modificarEmpleados ? "Modificar" : "Registrar"}
          </button>
          {modificarEmpleados && (
            <button className="btn btn-success ms-3" onClick={handleClear}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
