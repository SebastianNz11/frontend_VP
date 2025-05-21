import Datatable from "react-data-table-component";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
export const TableEmpleados = () => {
  const { empleados, deleteEmpleados, setModificarEmpleados } =
    useContext(GeneralContext);
  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Apellido",
      selector: (row) => row.apellido,
      sortable: true,
    },
    {
      name: "id_rol",
      selector: (row) => row.id_rol,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div>
          <button
            className="btn btn-warning me-2"
            onClick={() => setModificarEmpleados(row)}
          >
            M
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteEmpleados(row.id_empleado)}
          >
            E
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <Datatable pagination columns={columns} data={empleados} />
    </div>
  );
};
