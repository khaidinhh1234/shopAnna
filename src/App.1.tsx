import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./page/About";
import LayoutAdmin from "./page/Layout/Layoutadmin";
import Layoutuser from "./page/Layout/Layoutuser";
import Notfound from "./page/Notfound";
import Dashboard from "./page/admin/Dashboard";
import ListProducts from "./page/admin/products/products";
import AuthForm from "./Component/AuthForm";
import PrivateRoute from "./Component/PrivateRoute";
import HomePage from "./page/HomePage";
import Product_detail from "./page/Product_detail";
import ProductsFrom from "./page/admin/products/ProductsFrom";
import Test from "./test";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

export function App() {
  return (
    <>
      <Routes>
        {/* Trang admin  */}
        <Route
          path="admin"
          element={
            <PrivateRoute>
              <LayoutAdmin />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />}></Route>
          <Route path="products" element={<ListProducts />}></Route>
          <Route path="products/add" element={<ProductsFrom />}></Route>

          <Route path="products/edit/:id" element={<ProductsFrom />}></Route>
        </Route>
        {/* Trang User */}
        <Route path="/" element={<Layoutuser />}>
          <Route index element={<HomePage />} />
          <Route path="/product-detail/:id" element={<Product_detail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Route>

        <Route
          path="/signup/*"
          element={
            <AuthForm
              isSignup
              redirectUrl={"/"}
              routing="path"
              path="/signup"
            />
          }
        />
        <Route
          path="/signin/*"
          element={<AuthForm redirectUrl={"/"} routing="path" path="/signin" />}
        />
        <Route
          path="/"
          element={
            <>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </>
          }
        ></Route>
        <Route path="/test" element={<Test />} />
      </Routes>
      <ToastContainer />
    </>
  );
}
