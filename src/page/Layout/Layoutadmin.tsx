import Header from "../../Component/admin/Header";
import Footer from "../../Component/admin/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Component/admin/Sidebar";
const LayoutAdmin = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>{" "}
    </>
  );
};

export default LayoutAdmin;
