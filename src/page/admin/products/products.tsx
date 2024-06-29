import { Link } from "react-router-dom";
import { IProduct, IProducts } from "../../../interface/products";
import { useContext } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import { deleteById } from "../../../service/products";
import { toast } from "react-toastify";

const ListProducts = () => {
  const { state, dispatch } = useContext(ProductContext);
  const products = state.products;
  const handleRemove = (id: number) => {
    (async () => {
      try {
        if (confirm("Bạn  có chắc chắn xóa không ?")) {
          await deleteById(id);
          const newData = products.filter(
            (item: IProduct) => item.id !== id && item
          );
          dispatch({ type: "GET_PRODUCTS", payload: newData });
          toast.success("Xóa sản phẩm thành công");
        }
      } catch (error) {
        toast.error("Xoá không thành công");
      }
    })();
  };
  return (
    <>
      <div className="px-6">
        <div className="mt-8">
          <h4 className="text-gray-700 text-3xl font-medium">
            Danh sách sản phẩm
          </h4>
          <div className="mt-4">
            <button className="px-4 py-1 bg-indigo-500 rounded-lg text-white mb-2">
              <Link to="/admin/products/add">Thêm sản phẩm</Link>
            </button>
            <div className="bg-white rounded-md shadow-sm">
              <table className="min-w-full bg-white text-center">
                <thead>
                  <tr className="*:px-4 *:py-2 *:bg-gray-200">
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Thumbnail</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product: IProduct, i: number) => (
                    <tr className="py-2 px-4 border-b *:py-2" key={i}>
                      <td>{i + 1}</td>
                      <td>{product && product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.description}</td>

                      <td className="flex justify-center">
                        {product.thumbnail ? (
                          <img src={product.thumbnail} alt="Error Image" />
                        ) : (
                          "No image"
                        )}
                      </td>
                      <td>
                        <button
                          className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-900 hover:text-white shadow-xl shadow-slate-300 mr-2"
                          onClick={() => handleRemove(product.id as number)}
                        >
                          Xóa
                        </button>
                        <button
                          className="
                        bg-cyan-500
                        px-4
                        py-1
                        rounded-lg
                        hover:bg-cyan-900
                        hover:text-white
                        shadow-xl
                        shadow-slate-300
                        mr-2"
                        >
                          <Link to={`edit/${product.id}`}>Sửa</Link>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProducts;
