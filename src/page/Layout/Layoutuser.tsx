import { Outlet } from "react-router-dom";
import Header from "../../Component/user/Header";
import Footer from "../../Component/user/Footer";

const Layoutuser = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layoutuser;
