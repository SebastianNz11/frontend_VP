import { FormFactura } from "../components/FormFactura";
import { TableFacturas } from "../components/TableFacturas";

export const Facturas = () => {
  return (
    <div className="container-fluid">
      <div className="row m-0 p-0">
        <div className="col-lg-11 col-sm-12 ms-4 ps-5 mb-4">
          <FormFactura />
        </div>
        <div className="col-lg-12 col-sm-12">
          <TableFacturas />
        </div>
      </div>
    </div>
  );
};
