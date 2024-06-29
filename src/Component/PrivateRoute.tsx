import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import HomePage from "../page/HomePage";

const PrivateRoute = ({ children }: any) => {
  const { user } = JSON.parse(localStorage.getItem("user") || "");

  if (user.id !== 1) {
    toast.success("Đăng nhập thành công ");
    return <Navigate to={"/"} />;
  }

  toast.success("Đăng nhập admin thành công");
  return children ? children : <Navigate to={"/"} />;
};
export default PrivateRoute;
