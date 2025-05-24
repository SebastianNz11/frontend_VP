import Datatable from "react-data-table-component";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { BsTrash3Fill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
export const TableMascotas = () => {
  const { mascotas, deleteMascota, setModificarMascota } =
    useContext(GeneralContext);
  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Especie",
      selector: (row) => row.especie,
      sortable: true,
    },
    {
      name: "Raza",
      selector: (row) => row.raza,
      sortable: true,
    },
    {
      name: "edad",
      selector: (row) => row.edad,
      sortable: true,
    },
    {
      name: "id_cliente",
      selector: (row) => row.id_cliente,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div>
          <button
            className="btn btn-warning me-2"
            onClick={() => setModificarMascota(row)}
          >
            <BsPencilFill />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteMascota(row.id_mascota)}
          >
            <BsTrash3Fill />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <Datatable pagination columns={columns} data={mascotas} />
    </div>
  );
};
