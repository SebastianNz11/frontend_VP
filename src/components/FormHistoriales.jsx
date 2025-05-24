import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { GeneralContext } from "../context/GeneralContext";

export const FormHistoriales = () => {
  const {
    postHistoriales,
    modificarHistoriales,
    setModificarHistoriales,
    updateHistoriales,
    mascotas,
    citas,
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
    if (modificarHistoriales) {
      console.log(modificarHistoriales);
      updateHistoriales(modificarHistoriales.id_historial, data);
      setModificarHistoriales(null);
    } else {
      postHistoriales(data);
    }
    reset();
  };

  useEffect(() => {
    if (modificarHistoriales) {
      setValue("id_mascota", modificarHistoriales.id_mascota);
      setValue("descripcion", modificarHistoriales.descripcion);
      setValue("tratamiento", modificarHistoriales.tratamiento);
      setValue("observaciones", modificarHistoriales.observaciones);
      setValue("fecha", modificarHistoriales.fecha);
      setValue("id_cita", modificarHistoriales.id_cita);
    }
  }, [modificarHistoriales, setValue]);
  const handleClear = () => {
    reset();
    setModificarHistoriales(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="color-text mb-3">Registro de Historiales</h1>
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
        <input
          type="text"
          className="form-control form-border mb-3"
          placeholder="Descripción"
          {...register("descripcion", {
            required: {
              value: true,
              message: "Descripción es requerido",
            },
            minLength: {
              value: 3,
              message: "El descripción debe contener más de 3 letras",
            },
            maxLength: {
              value: 40,
              message: "El descripción no debe sobrepasar las 40 letras",
            },
          })}
        />
        {errors.descripcion && (
          <p className="alerta">{errors.descripcion.message}</p>
        )}
        <input
          type="text"
          className="form-control form-border mb-3"
          placeholder="Tratamiento"
          {...register("tratamiento", {
            required: {
              value: true,
              message: "Tratamiento es requerido",
            },
            minLength: {
              value: 3,
              message: "El tratamiento debe contener más de 3 letras",
            },
            maxLength: {
              value: 40,
              message: "El tratamiento no debe sobrepasar las 40 letras",
            },
          })}
        />
        {errors.tratamiento && (
          <p className="alerta">{errors.tratamiento.message}</p>
        )}
        <input
          type="text"
          className="form-control form-border mb-3"
          placeholder="Observaciones"
          {...register("observaciones", {
            required: {
              value: true,
              message: "observaciones es requerido",
            },
            minLength: {
              value: 3,
              message: "El observaciones debe contener más de 3 letras",
            },
            maxLength: {
              value: 40,
              message: "El observaciones no debe sobrepasar las 40 letras",
            },
          })}
        />
        {errors.observaciones && (
          <p className="alerta">{errors.observaciones.message}</p>
        )}
        <label htmlFor="" className="color-text form-label">Fecha</label>
        <input
          type="date"
          className="form-control form-border mb-3 color-text"
          placeholder="Fecha"
          {...register("fechaH", {
            required: {
              value: true,
              message: "Fecha es requerido",
            },
          })}
        />
        {errors.fechaH && <p className="alerta">{errors.fechaH.message}</p>}
        <select
          id="miSelect"
          className="form-select form-border mb-3 color-text"
          {...register("id_cita", { required: "Seleccione una cita" })}
        >
          <option value="" hidden>
            Seleccione una cita
          </option>
          {citas.map((opcion) => (
            <option key={opcion.id_cita} value={opcion.id_cita}>
              {opcion.id_cita}
            </option>
          ))}
        </select>
        {errors.id_cita && (
          <p className="alerta mt-2">{errors.id_cita.message}</p>
        )}

        <div>
          <button
            type="submit"
            className={modificarHistoriales ? "btn btn-warning" : "btn boton"}
          >
            {modificarHistoriales ? "Modificar" : "Registrar"}
          </button>
          {modificarHistoriales && (
            <button className="btn btn-success ms-3" onClick={handleClear}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
