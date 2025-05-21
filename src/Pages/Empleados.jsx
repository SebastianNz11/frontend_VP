import { FormEmpleados } from "../components/FormEmpleados";
import { TableEmpleados } from "../components/TableEmpleados";

export const Empleados = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <FormEmpleados />
        </div>
        <div className="col-lg-8 col-sm-12">
          <TableEmpleados />
        </div>
      </div>
    </div>
  );
};
