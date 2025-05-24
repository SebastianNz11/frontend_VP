import Datatable from "react-data-table-component";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { BsTrash3Fill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
export const TableCita = () => {
  const { citas, deleteCita, setModificarCitas } =
    useContext(GeneralContext);
  const columns = [
    {
      name: "id_cliente",
      selector: (row) => row.id_cliente,
      sortable: true,
    },
    {
      name: "id_mascota",
      selector: (row) => row.id_mascota,
      sortable: true,
    },
    {
      name: "id_servicio",
      selector: (row) => row.id_servicio,
      sortable: true,
    },
    {
      name: "descripcion",
      selector: (row) => row.descripcion,
      sortable: true,
    },
    {
      name: "fecha",
      selector: (row) => row.fecha,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div>
          <button
            className="btn btn-warning me-2"
            onClick={() => setModificarCitas(row)}
          >
            <BsPencilFill/>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteCita(row.id_cita)}
          >
            <BsTrash3Fill/>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <Datatable pagination columns={columns} data={citas} />
    </div>
  );
};
