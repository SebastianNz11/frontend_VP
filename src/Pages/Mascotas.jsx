import { FormMascotas } from "../components/FormMascotas";
import { TableMascotas } from "../components/TableMascotas";
export const Mascotas = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <FormMascotas />
        </div>
        <div className="col-lg-8 col-sm-12">
          <TableMascotas />
        </div>
      </div>
    </div>
  );
};
