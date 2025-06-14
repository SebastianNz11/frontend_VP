import Datatable from "react-data-table-component";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { BsTrash3Fill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
export const TableInsumos = () => {
  const { insumos, deleteInsumo, setModificarInsumos } =
    useContext(GeneralContext);
  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Cantidad",
      selector: (row) => row.cantidad,
      sortable: true,
    },
    {
      name: "fecha_ingreso",
      selector: (row) => row.fecha_ingreso,
      sortable: true,
    },
    {
      name: "fecha_vencimiento",
      selector: (row) => row.fecha_vencimiento,
      sortable: true,
    },
    {
      name: "Proveedor",
      selector: (row) => row.proveedor,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div>
          <button
            className="btn btn-warning me-2"
            onClick={() => setModificarInsumos(row)}
          >
            <BsPencilFill />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteInsumo(row.id_insumo)}
          >
            <BsTrash3Fill />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <Datatable pagination columns={columns} data={insumos} />
    </div>
  );
};
