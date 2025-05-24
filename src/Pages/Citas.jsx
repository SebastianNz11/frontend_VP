import { FormCita } from "../components/FormCita";
import { TableCita } from "../components/TableCita";

export const Citas = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <FormCita />
        </div>
        <div className="col-lg-8 col-sm-12">
          <TableCita />
        </div>
      </div>
    </div>
  );
};
