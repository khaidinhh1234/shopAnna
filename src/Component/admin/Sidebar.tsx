import { useState } from "react";

const Sidebar = () => {
  return (
    <div>
      <div>
        <div className="w-64 h-screen bg-gray-800 text-white">
          <div className="p-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          </div>

          <nav className={`mt-10 `}>
            <a
              href="/admin"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
            >
              Dashboard
            </a>
            <a
              href="/admin/products"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
            >
              Products
            </a>
            <a
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
            >
              Settings
            </a>
            <a
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
            >
              Logout
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
