import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { GeneralContext } from "../context/GeneralContext";

export const FormMascotas = () => {
  const {
    postMascota,
    modificarMascota,
    setModificarMascota,
    updateMascota,
    clientes,
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
    if (modificarMascota) {
      console.log(modificarMascota);
      updateMascota(modificarMascota.id_mascota, data);
      setModificarMascota(null);
    } else {
      console.log(data);
      postMascota(data);
    }
    reset();
  };

  useEffect(() => {
    if (modificarMascota) {
      setValue("nombre", modificarMascota.nombre);
      setValue("especie", modificarMascota.especie);
      setValue("raza", modificarMascota.raza);
      setValue("edad", modificarMascota.edad);
      setValue("id_cliente", modificarMascota.id_cliente);
    }
  }, [modificarMascota, setValue]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="color-text mb-3">Registro de Mascotas</h1>
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
          placeholder="Especie"
          {...register("especie", {
            required: {
              value: true,
              message: "Especie es requerido",
            },
            minLength: {
              value: 3,
              message: "La especie debe contener más de 3 letras",
            },
            maxLength: {
              value: 10,
              message: "La especie no debe sobrepasar las 10 letras",
            },
          })}
        />
        {errors.especie && <p className="alerta">{errors.especie.message}</p>}
        <input
          type="text"
          className="form-control form-border mb-3"
          placeholder="Raza"
          {...register("raza", {
            required: {
              value: true,
              message: "Raza es requerida",
            },
            minLength: {
              value: 3,
              message: "La raza debe contener más de 3 letras",
            },
            maxLength: {
              value: 10,
              message: "La raza no debe sobrepasar las 10 letras",
            },
          })}
        />
        {errors.raza && <p className="alerta">{errors.raza.message}</p>}
        <input
          type="text"
          className="form-control form-border mb-3"
          placeholder="Edad"
          {...register("edad", {
            required: {
              value: true,
              message: "Edad es requerida",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Solo se permiten números",
            },
          })}
        />
        {errors.edad && <p className="alerta">{errors.edad.message}</p>}

        <select
          id="miSelect"
          className="form-select form-border"
          {...register("id_cliente", { required: "Seleccione un cliente" })}
        >
          <option value="" hidden>
            Seleccione una opción
          </option>
          {clientes.map((opcion) => (
            <option key={opcion.id_cliente} value={opcion.id_cliente}>
              {opcion.nombre}
            </option>
          ))}
        </select>
        {errors.cliente && (
          <p className="alerta mt-2">{errors.cliente.message}</p>
        )}

        <div className="mt-3">
          <button
            type="submit"
            className={modificarMascota ? "btn btn-warning" : "btn boton"}
          >
            {modificarMascota ? "Modificar" : "Registrar"}
          </button>
        </div>
      </form>
    </div>
  );
};
