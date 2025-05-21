import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { GeneralContext } from "../context/GeneralContext";

export const FormFactura = () => {
  const {
    postFacturas,
    modificarFacturas,
    setModificarFacturas,
    updateFacturas,
    citas,
    insumos,
    metodos,
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
    if (modificarFacturas) {
      console.log(modificarFacturas);
      updateFacturas(modificarFacturas.id_factura, data);
      setModificarFacturas(null);
    } else {
      console.log(data);
      postFacturas(data);
    }
    reset();
  };

  useEffect(() => {
    if (modificarFacturas) {
      setValue("id_cita", modificarFacturas.id_cita);
      setValue("id_insumo", modificarFacturas.id_insumo);
      setValue("id_metodo", modificarFacturas.id_metodo);
      setValue("fecha", modificarFacturas.fecha);
      setValue("precio", modificarFacturas.precio);
    }
  }, [modificarFacturas, setValue]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="color-text mb-3">Registro de facturas</h1>
        <select
          id="miSelect"
          className="form-select form-border mb-3"
          {...register("id_cita", { required: "Seleccione una cita" })}
        >
          <option value="" hidden>
            Seleccione una opción
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
        <select
          id="miSelect"
          className="form-select form-border mb-3"
          {...register("id_insumo", { required: "Seleccione un insumo" })}
        >
          <option value="" hidden>
            Seleccione una opción
          </option>
          {insumos.map((opcion) => (
            <option key={opcion.id_insumo} value={opcion.id_insumo}>
              {opcion.nombre}
            </option>
          ))}
        </select>
        {errors.id_insumo && (
          <p className="alerta mt-2">{errors.id_insumo.message}</p>
        )}
        <select
          id="miSelect"
          className="form-select form-border mb-3"
          {...register("id_metodo", { required: "Seleccione un metodo" })}
        >
          <option value="" hidden>
            Seleccione una opción
          </option>
          {metodos.map((opcion) => (
            <option key={opcion.id_metodo} value={opcion.id_metodo}>
              {opcion.metodo}
            </option>
          ))}
        </select>
        {errors.id_metodo && (
          <p className="alerta mt-2">{errors.id_metodo.message}</p>
        )}
        <input
          type="date"
          className="form-control form-border mb-3"
          placeholder="Fecha"
          {...register("fechaF", {
            required: {
              value: true,
              message: "Fecha es requerido",
            },
          })}
        />
        {errors.fechaF && <p className="alerta">{errors.fechaF.message}</p>}
        <input
          type="text"
          className="form-control form-border mb-3"
          placeholder="Precio"
          {...register("precio", {
            required: {
              value: true,
              message: "Precio es requerido",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Solo se permiten números",
            },
          })}
        />
        {errors.precio && <p className="alerta">{errors.precio.message}</p>}
        <div>
          <button
            type="submit"
            className={modificarFacturas ? "btn btn-warning" : "btn boton"}
          >
            {modificarFacturas ? "Modificar" : "Registrar"}
          </button>
        </div>
      </form>
    </div>
  );
};
