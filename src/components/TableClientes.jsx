import Datatable from "react-data-table-component";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { BsTrash3Fill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
export const TableClientes = () => {
  const { clientes, deleteCliente, setModificarClientes } =
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
      name: "Dpi",
      selector: (row) => row.dpi,
      sortable: true,
    },
    {
      name: "Telefono",
      selector: (row) => row.telefono,
      sortable: true,
    },
    {
      name: "Correo",
      selector: (row) => row.correo,
      sortable: true,
    },
    {
      name: "Direccion",
      selector: (row) => row.direccion,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div>
          <button
            className="btn btn-warning me-2"
            onClick={() => setModificarClientes(row)}
          >
            <BsPencilFill />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteCliente(row.id_cliente)}
          >
            <BsTrash3Fill />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <Datatable pagination columns={columns} data={clientes} />
    </div>
  );
};
