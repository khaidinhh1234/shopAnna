import React, { useContext } from "react";
import { IProducts } from "../interface/products";
import Product_Item from "../Component/user/product_Item";
import { ProductContext } from "../Context/ProductContext";

const HomePage = () => {
  const value = useContext(ProductContext);
  const products = value.state.products;

  return (
    <div>
      <div className="max-w-7xl m-auto my-10">
        <h1 className="text-4xl font-medium">Danh sách sản phẩm</h1>

        <div className="grid grid-cols-4 gap-4 mt-5 ">
          {products?.map((product: any, index: number) => (
            <Product_Item product={product} i={index}></Product_Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
