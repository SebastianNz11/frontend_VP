import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";
export const Inicio = () => {
  const { user} = useContext(AuthContext);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center col-sm-12">
          <h1 className="display-3 fw-bold color-text text-center ms-5">Bienvenid@ {user.nombre}</h1>
        </div>
        <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
          <img src="VETPROB.png" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
