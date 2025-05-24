import Datatable from "react-data-table-component";
import { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FacturaPDF } from "./FacturaPDF";
import { BsTrash3Fill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";

export const TableFacturas = () => {
  const { facturas, deleteFacturas, setModificarFacturas } =
    useContext(GeneralContext);

  const columns = [
    {
      name: "id_factura",
      selector: (row) => row.id_factura,
      sortable: true,
    },
    {
      name: "id_cita",
      selector: (row) => row.id_cita,
      sortable: true,
    },
    {
      name: "id_insumo",
      selector: (row) => row.id_insumo,
      sortable: true,
    },
    {
      name: "metodo",
      selector: (row) => row.id_metodo,
      sortable: true,
    },
    {
      name: "fecha",
      selector: (row) => row.fecha,
      sortable: true,
    },
    {
      name: "precio",
      selector: (row) => row.precio,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="d-flex flex-wrap gap-1">
          <button
            className="btn btn-warning"
            onClick={() => setModificarFacturas(row)}
          >
            <BsPencilFill />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteFacturas(row.id_factura)}
          >
            <BsTrash3Fill />
          </button>
          <PDFDownloadLink
            document={<FacturaPDF factura={row} />}
            fileName={`factura_${row.id_factura}.pdf`}
            className="btn btn-primary"
          >
            {({ loading }) => (loading ? "..." : <BsFillFileEarmarkTextFill />)}
          </PDFDownloadLink>
        </div>
      ),
    },
  ];

  return (
    <div className="container-fluid">
      <Datatable pagination columns={columns} data={facturas} />
    </div>
  );
};
