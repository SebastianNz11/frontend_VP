import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { GeneralContext } from "../context/GeneralContext";

export const FormInsumos = () => {
  const { postInsumo, modificarInsumos, setModificarInsumos, updateInsumo } =
    useContext(GeneralContext);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (modificarInsumos) {
      console.log(modificarInsumos);
      updateInsumo(modificarInsumos.id_insumo, data);
      setModificarInsumos(null);
    } else {
      console.log(data);
      postInsumo(data);
    }
    reset();
  };

  useEffect(() => {
    if (modificarInsumos) {
      setValue("nombre", modificarInsumos.nombre);
      setValue("cantidad", modificarInsumos.cantidad);
      setValue("fecha_ingreso", modificarInsumos.fecha_ingreso);
      setValue("fecha_vencimiento", modificarInsumos.fecha_vencimiento);
      setValue("proveedor", modificarInsumos.proveedor);
    }
  }, [modificarInsumos, setValue]);
  const handleClear = () => {
    reset();
    setModificarInsumos(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="color-text mb-3">Registro de Insumos</h1>
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
              value: 20,
              message: "El nombre no debe sobrepasar las 20 letras",
            },
          })}
        />
        {errors.nombre && <p className="alerta">{errors.nombre.message}</p>}

        <input
          type="text"
          className="form-control form-border mb-3"
          placeholder="Cantidad"
          {...register("cantidad", {
            required: {
              value: true,
              message: "Cantidad es requerido",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Solo se permiten números",
            },
          })}
        />
        {errors.cantidad && <p className="alerta">{errors.cantidad.message}</p>}
        <label htmlFor="" className="color-text form-label">
          {" "}
          Fecha de ingreso
        </label>
        <input
          type="date"
          className="form-control form-border mb-3 color-text"
          placeholder="Fecha Ingreso"
          {...register("fecha_ingresoI", {
            required: {
              value: true,
              message: "Fecha ingreso es requerido",
            },
          })}
        />
        {errors.fecha_ingreso && (
          <p className="alerta">{errors.fecha_ingreso.message}</p>
        )}
        <label htmlFor="" className="color-text form-label">
          {" "}
          Fecha de vencimiento
        </label>
        <input
          type="date"
          className="form-control form-border mb-3 color-text"
          placeholder="Fecha Vencimiento"
          {...register("fecha_vencimientoI", {
            required: {
              value: true,
              message: "Fecha vencimiento es requerido",
            },
          })}
        />
        {errors.fecha_vencimiento && (
          <p className="alerta">{errors.fecha_vencimiento.message}</p>
        )}
        <input
          type="text"
          className="form-control form-border mb-4"
          placeholder="Proveedor"
          {...register("proveedor", {
            required: {
              value: true,
              message: "Proveedor es requerido",
            },
            minLength: {
              value: 5,
              message: "La proveedor debe tener más de 5 letras",
            },
            maxLength: {
              value: 100,
              message: "La proveedor no debe tener más de 100 letras",
            },
          })}
        />
        {errors.proveedor && (
          <p className="alerta">{errors.proveedor.message}</p>
        )}
        <div>
          <button
            type="submit"
            className={modificarInsumos ? "btn btn-warning" : "btn boton"}
          >
            {modificarInsumos ? "Modificar" : "Registrar"}
          </button>
          {modificarInsumos && (
            <button className="btn btn-success ms-3" onClick={handleClear}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
