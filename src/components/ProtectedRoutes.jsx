import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({ isAllowed, children, redirecTo }) => {
  if (!isAllowed) {
    return <Navigate to={redirecTo} />;
  }

  return children ? children : <Outlet />;
};
