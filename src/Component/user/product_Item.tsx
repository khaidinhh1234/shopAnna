import { Link } from "react-router-dom";
import Button from "../Button";

const Product_Item = ({ product, i }: any) => {
  return (
    <>
      {" "}
      <div key={i} className="border p-1  flex flex-col h-full">
        {product.thumbnail && (
          <Link to={`/product-detail/${product.id}`}>
            {" "}
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-80 object-cover"
            />
          </Link>
        )}
        <div className="flex-grow mt-4">
          <Link to={`/product-detail/${product.id}`}>
            {" "}
            <h2 className="text-xl font-semibold">{product.title}</h2>
          </Link>{" "}
          <p className="text-gray-900 pb-5">${product.price}</p>
          <p className="text-gray-500">{product.description}</p>
        </div>{" "}
        <div className="p-3">
          <Button className=" w-full text-white bg-red-600 rounded-lg py-2 hover:bg-white hover:text-red-600 border border-red-600 px-[12] ">
            Add to cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default Product_Item;
