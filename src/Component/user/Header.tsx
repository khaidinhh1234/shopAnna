import React, { useContext, useState } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import HomePage from "../../page/HomePage";
import { ProductContext } from "../../Context/ProductContext";
import { IProduct } from "../../interface/products";
import instance from "./../../config/axios";
import { SignInButton, UserButton, useSession } from "@clerk/clerk-react";

const Header = () => {
  const { session } = useSession();
  const [click, setClick] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const userItem = localStorage.getItem("user");
  const newLocal =
    userItem && userItem !== "undefined" ? JSON.parse(userItem) : null;
  const nav = useNavigate();
  const { state, dispatch } = useContext(ProductContext);
  const products = state.products;
  console.log(searchTerm);
  console.log(state.products);
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
    // dispatch({ type: "SEARCH_PRODUCT", payload: event.target.value });
  };

  const handleSearchSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await instance.get(`/products?q=${searchTerm}`);
      const data = response.data;
      dispatch({ type: "GET_PRODUCTS", payload: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // Thêm logic tìm kiếm ở đây
  };
  return (
    <div>
      {" "}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <Link to="/">BrandLogo</Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-white hover:bg-slate-600 px-3 py-2 rounded-md text-sm font-medium active:bg-slate-600 active:text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-white hover:bg-slate-600 px-3 py-2 rounded-md text-sm font-medium active:bg-slate-600 active:text-white"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-white hover:bg-slate-600 px-3 py-2 rounded-md text-sm font-medium active:bg-slate-600 active:text-white"
            >
              Shop
            </Link>
          </nav>
          <div>
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Search
              </button>
            </form>
            {isLoading ? (
              <div className="absolute  border bg-white font-medium w-[215px] mt-3">
                {products.slice(0, 5).map((product: IProduct, i: number) => (
                  <NavLink
                    to={`/product-detail/${product.id}`}
                    key={i}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-gray-100"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-1"
                    onClick={() => {
                      setSearchTerm(product.title);
                    }}
                  >
                    {product.title}
                  </NavLink>
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="relative mr-10">
            <div>
              {session ? <UserButton /> : <SignInButton />}
              <br />
              <button onClick={() => setClick(true)}>Submit</button>
            </div>
            {click && (
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}
              >
                {newLocal ? (
                  <>
                    <h5
                      className="block px-4 py-2 text-base font-medium text-gray-700 bg-gray-300 active:bg-gray-100"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-1"
                    >
                      Chào Bạn: {newLocal.user.email.split("@")[0]}
                    </h5>
                    <span
                      className=" cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-gray-100"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-1"
                      onClick={() => {
                        localStorage.removeItem("user"), nav("/");
                      }}
                    >
                      LogOut
                    </span>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="signin"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-gray-100"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-1"
                    >
                      SignIn
                    </NavLink>
                    <NavLink
                      to="signup"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-gray-100"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                    >
                      SignUp
                    </NavLink>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
