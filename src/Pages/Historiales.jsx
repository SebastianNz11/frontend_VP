import { FormHistoriales } from "../components/FormHistoriales";
import { TableHistoriales } from "../components/TableHistoriales";

export const Historiales = () => {
  return (
    <div className="container-fluid">
          <div className="row m-0 p-0">
            <div className="col-lg-11 col-sm-12 ms-4 ps-5 mb-4 mt-5">
              <FormHistoriales />
            </div>
            <div className="col-lg-12 col-sm-12 p-0 m-0 mb-5">
              <TableHistoriales />
            </div>
          </div>
        </div>
  );
};
