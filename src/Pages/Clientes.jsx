import { FormClientes } from "../components/FormClientes";
import { TableClientes } from "../components/TableClientes";

export const Clientes = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <FormClientes />
        </div>
        <div className="col-lg-8 col-sm-12">
          <TableClientes />
        </div>
      </div>
    </div>
  );
};
