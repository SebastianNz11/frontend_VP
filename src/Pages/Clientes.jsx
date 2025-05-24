import { Form } from "react-hook-form";
import { FormClientes } from "../components/FormClientes";
import { TableClientes } from "../components/TableClientes";

export const Clientes = () => {
  return (
    <div className="container-fluid">
      <div className="row m-0 p-0">
        <div className="col-lg-11 col-sm-12 ms-4 ps-5 mb-4 mt-5">
          <FormClientes />
        </div>
        <div className="col-lg-12 col-sm-12 p-0 m-0">
          <TableClientes />
        </div>
      </div>
    </div>
  );
};
