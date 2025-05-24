import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getNavItems = (rol) => {
    let items = [];

    if (rol === 1 || rol === 4) {
      items.push(
        { path: "/clientes", label: "Clientes" },
        { path: "/mascotas", label: "Mascotas" },
        { path: "/citas", label: "Citas" },
        { path: "/facturas", label: "Facturas" }
      );
    }

    if (rol === 2 || rol === 4) {
      items.push(
        { path: "/insumos", label: "Insumos" },
        { path: "/historiales", label: "Historiales" },
        { path: "/citas", label: "Citas" }
      );
    }

    if (rol === 3 || rol === 4) {
      items.push(
        { path: "/insumos", label: "Insumos" },
        { path: "/graficas", label: "Gráficas" },
        { path: "/facturas", label: "Facturas" }
      );
    }

    if (rol === 4) {
      items.push({ path: "/empleados", label: "Empleados" });
    }
    const uniqueItems = Array.from(
      new Map(items.map((item) => [item.path, item])).values()
    );

    return uniqueItems;
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#ff8c00" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/inicio">
          <img
            src="VETPRO.jpg"
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
        </Link>

        {user && (
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row align-items-center">
            {getNavItems(user.rol).map(({ path, label }) => (
              <li className="nav-item me-3" key={path}>
                <Link className="nav-link text-white fw-bold" to={path}>
                  {label}
                </Link>
              </li>
            ))}

            <li className="nav-item">
              <button
                className="btn btn-success text-white ms-3 fw-bold"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
