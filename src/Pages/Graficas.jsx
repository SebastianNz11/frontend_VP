import { GraficoEspecies } from "../components/GraficoEspecies";
import { GraficoInsumosPie } from "../components/GraficoInsumosPie";
import { FacturasPorMes } from "../components/FacturasPorMes";
import { MetodoPago } from "../components/MetodoPago";
export const Graficas = () => {
  return (
    <div className="container-fluid">
      <div className="row gap-5 d-flex justify-content-center mt-5">
        <div className="col-lg-6 col-sm-12 me-5 pe-5">
          <GraficoEspecies />
        </div>
        <div className="col-lg-3 col-sm-12 me-5">
          <GraficoInsumosPie />
        </div>
      </div>
      <div className="row gap-5  d-flex justify-content-center mt-5">
        <div className="col-lg-6 col-sm-12 me-5 pe-5">
          <FacturasPorMes />
        </div>
        <div className="col-lg-3 col-sm-12 mb-5 me-5">
          <MetodoPago />
        </div>
      </div>
    </div>
  );
};
