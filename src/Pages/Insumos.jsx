import { FormInsumos } from "../components/FormInsumos";
import { TableInsumos } from "../components/TableInsumos";

export const Insumos = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <FormInsumos />
        </div>
        <div className="col-lg-8 col-sm-12">
          <TableInsumos />
        </div>
      </div>
    </div>
  );
};
