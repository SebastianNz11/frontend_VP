import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const [nombre, setNombre] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_LINKBACKEND}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, contrasenia }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Error al iniciar sesión");
        return;
      }

      handleLogin(data.empleado, data.token);
      navigate("/inicio");
    } catch (err) {
      setError("Error de conexión con el servidor");
      console.error(err);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row fondo">
        <div className="col-6 d-flex justify-content-center align-items-center min-vh-100 fondo">
          <img src="/VETPRO.jpg" alt="" />
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center min-vh-100">
          <form
            onSubmit={handleSubmit}
            className="loginForm bg-white p-5 rounded-5 me-5"
            style={{ width: "100%", maxWidth: "500px" }}
          >
            <h2 className="color-text h2 mb-4">Login</h2>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="form-control mb-3 form-border"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={contrasenia}
              onChange={(e) => setContrasenia(e.target.value)}
              required
              className="form-control mb-3 form-border"
            />
            <button type="submit" className="btn boton">
              Ingresar
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
