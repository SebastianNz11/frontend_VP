import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { GeneralContext } from "../context/GeneralContext";

export const FormCita = () => {
  const {
    postCita,
    modificarCitas,
    setModificarCitas,
    updateCita,
    clientes,
    mascotas,
    servicios,
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
    if (modificarCitas) {
      console.log(modificarCitas);
      updateCita(modificarCitas.id_cita, data);
      setModificarCitas(null);
    } else {
      console.log(data);
      postCita(data);
    }
    reset();
  };

  useEffect(() => {
    if (modificarCitas) {
      setValue("id_cliente", modificarCitas.id_cliente);
      setValue("id_mascota", modificarCitas.id_mascota);
      setValue("id_servicio", modificarCitas.id_servicio);
      setValue("descripcion", modificarCitas.descripcion);
      setValue("fecha", modificarCitas.fecha);
    }
  }, [modificarCitas, setValue]);
  
  const handleClear = () => {
    reset();
    setModificarCitas(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="color-text mb-3">Registro de citas</h1>
        <select
          id="miSelect"
          className="form-select form-border mb-3 color-text"
          {...register("id_cliente", { required: "Seleccione un cliente" })}
        >
          <option value="" hidden>
            Seleccione un cliente
          </option>
          {clientes.map((opcion) => (
            <option key={opcion.id_cliente} value={opcion.id_cliente}>
              {opcion.nombre}
            </option>
          ))}
        </select>
        {errors.id_cliente && (
          <p className="alerta mt-2">{errors.id_cliente.message}</p>
        )}
        <select
          id="miSelect"
          className="form-select form-border mb-3 color-text"
          {...register("id_mascota", { required: "Seleccione una mascota" })}
        >
          <option value="" hidden>
            Seleccione una mascota
          </option>
          {mascotas.map((opcion) => (
            <option key={opcion.id_mascota} value={opcion.id_mascota}>
              {opcion.nombre}
            </option>
          ))}
        </select>
        {errors.id_mascota && (
          <p className="alerta mt-2">{errors.id_mascota.message}</p>
        )}
        <select
          id="miSelect"
          className="form-select form-border mb-3 color-text"
          {...register("id_servicio", { required: "Seleccione un servicio" })}
        >
          <option value="" hidden>
            Seleccione un servicio
          </option>
          {servicios.map((opcion) => (
            <option key={opcion.id_servicio} value={opcion.id_servicio}>
              {opcion.servicio}
            </option>
          ))}
        </select>
        {errors.id_servicio && (
          <p className="alerta mt-2">{errors.id_servicio.message}</p>
        )}

        <input
          type="text"
          className="form-control form-border mb-3"
          placeholder="Descripcion"
          {...register("descripcion", {
            required: {
              value: true,
              message: "Descripcion es requerido",
            },
          })}
        />
        {errors.descripcion && (
          <p className="alerta">{errors.descripcion.message}</p>
        )}
        <input
          type="date"
          className="form-control form-border mb-3 color-text"
          placeholder="Fecha"
          {...register("fechaC", {
            required: {
              value: true,
              message: "Fecha es requerido",
            },
          })}
        />
        {errors.fechaC && <p className="alerta">{errors.fechaC.message}</p>}

        <div>
          <button
            type="submit"
            className={modificarCitas ? "btn btn-warning" : "btn boton"}
          >
            {modificarCitas ? "Modificar" : "Registrar"}
          </button>
          {modificarCitas && (
            <button className="btn btn-success ms-3" onClick={handleClear}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
