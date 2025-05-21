import { FormHistoriales } from "../components/FormHistoriales";
import { TableHistoriales } from "../components/TableHistoriales";

export const Historiales = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-sm-12">
          <FormHistoriales />
        </div>
        <div className="col-lg-9 col-sm-12">
          <TableHistoriales />
        </div>
      </div>
    </div>
  );
};