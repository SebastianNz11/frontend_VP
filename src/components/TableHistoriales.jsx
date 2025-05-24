import Datatable from "react-data-table-component";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { BsTrash3Fill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
export const TableHistoriales = () => {
  const { historiales, deleteHistoriales, setModificarHistoriales } =
    useContext(GeneralContext);
  const columns = [
    {
      name: "id_historial",
      selector: (row) => row.id_historial,
      sortable: true,
    },
    {
      name: "id_mascota",
      selector: (row) => row.id_mascota,
      sortable: true,
    },
    {
      name: "descripcion",
      selector: (row) => row.descripcion,
      sortable: true,
    },
    {
      name: "tratamiento",
      selector: (row) => row.tratamiento,
      sortable: true,
    },
    {
      name: "observaciones",
      selector: (row) => row.observaciones,
      sortable: true,
    },
    {
      name: "fecha",
      selector: (row) => row.fecha,
      sortable: true,
    },
    {
      name: "id_cita",
      selector: (row) => row.id_cita,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div>
          <button
            className="btn btn-warning me-2"
            onClick={() => setModificarHistoriales(row)}
          >
            <BsPencilFill />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteHistoriales(row.id_historial)}
          >
            <BsTrash3Fill />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <Datatable pagination columns={columns} data={historiales} />
    </div>
  );
};
