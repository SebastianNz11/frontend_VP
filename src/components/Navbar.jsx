import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fondo">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="VETPRO.jpg" alt="" className="logo-nav" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  to="/clientes"
                >
                  Clientes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  to="/mascotas"
                >
                  Mascotas
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  to="/citas"
                >
                  Citas
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  to="/insumos"
                >
                  Insumos
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  to="/empleados"
                >
                  Empleados
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  to="/facturas"
                >
                  Facturas
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  to="/historiales"
                >
                  Historiales
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  to="/graficas"
                >
                  Graficas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      ;
    </div>
  );
};
