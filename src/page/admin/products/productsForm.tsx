import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";
import Button from "../../../Component/Button";
import { ProductContext } from "../../../Context/ProductContext";
import { IProduct } from "../../../interface/products";
import productSchema from "../../../schemaValid/productvalid";
import { addProduct, getById, updateProduct } from "../../../service/products";

const ProductsFrom = () => {
  const { dispatch } = useContext(ProductContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [thumbnailOption, setThumbnailOption] = useState("keep");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(productSchema) });

  const uploadImage = async (files: any) => {
    // const files = e.taget.files[0];
    const CLOUD_NAME = "dpypwbeis";
    const PRESET_NAME = "e0mmd63g";

    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const formData = new FormData();
    formData.append("file", files[0]);
    console.log(files[0]);
    formData.append("upload_preset", PRESET_NAME);
    const response = await fetch(api, { method: "POST", body: formData });
    const data = await response.json();
    console.log(data);
    return data.url;
  };
  if (id) {
    useEffect(() => {
      (async () => {
        try {
          const data = await getById(id);
          console.log(data);
          reset(data);
          setThumbnailUrl(data.thumbnail);
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);
  }

  const onsubmit: SubmitHandler<IProduct> = async (product: IProduct) => {
    console.log(product);

    try {
      let updatedProduct = { ...product };
      // Kiểm tra lựa chọn của admin và xử lý tương ứng
      switch (thumbnailOption) {
        case "upload":
          // Xử lý upload ảnh nếu admin chọn upload từ local
          if (product.thumbnail && product.thumbnail[0]) {
            const thumbnailUrl = await uploadImage(product.thumbnail[0]);
            updatedProduct = { ...updatedProduct, thumbnail: thumbnailUrl };
          }
          break;
        default:
      }
      if (id) {
        await updateProduct(updatedProduct as any);
        dispatch({ type: "UPDATE_PRODUCT", payload: { ...product, id } });

        toast.success("Cập nhật sản phẩm thành công");
        // navigate("/admin/products");
      } else {
        const data2 = await addProduct(updatedProduct as any);
        dispatch({ type: "ADD_PRODUCT", payload: data2 });
        setThumbnailUrl(data2.thumbnail);
        toast.success("Thêm sản phẩm thành công");
        setTimeout(() => {
          // navigate("/admin/products");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // onProduct(id ? { ...data, id } : data);

  return (
    <div className="px-6 max-w-6xl  m-auto">
      {" "}
      <h2 className="text-3xl font-bold mb-6 mx-10 my-5">
        {id ? "Edit Products" : "Add New Product"}
      </h2>
      <form onSubmit={handleSubmit(onsubmit as any)}>
        <div className="mb-4">
          <label className="block text-gray-700">Product Title</label>
          <input
            type="text"
            placeholder="Product title here"
            className="w-[50%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            {...register("title", { required: true })}
          />
          <br />
          {errors.title?.message && (
            <span className="text-red-500">
              {String(errors.title?.message)}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            {...register("price", { required: true, valueAsNumber: true })}
            placeholder="Price here"
            className="w-[50%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />{" "}
          <br />
          {errors.price?.message && (
            <span className="text-red-500">
              {String(errors.price?.message)}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-[50%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            rows={4}
            placeholder=" Description here"
          />
          {errors.description?.message && (
            <p className="text-red-500">
              {String(errors.description?.message)}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Choose Thumbnail Option</label>
          <select
            className="form-control"
            id="thumbnailOption"
            value={thumbnailOption}
            onChange={(e) => setThumbnailOption(e.target.value)}
          >
            <option value="keep">Keep Current Thumbnail</option>
            <option value="link">Add Thumbnail from Link</option>
            <option value="upload">Upload Thumbnail from Local</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Thumbnail </label>
          {thumbnailOption === "link" && (
            <input
              type="text"
              {...register("thumbnail")}
              placeholder="Thumbnail Link here"
              className="w-[50%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          )}{" "}
          {thumbnailOption === "upload" && (
            <input
              type="file"
              {...register("thumbnail", { required: true })}
              placeholder="Thumbnail upload here"
              // onChange={() => uploadImage}
              className="w-[50%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          )}
          {errors.thumbnail?.message && (
            <p className="text-danger">{String(errors.thumbnail?.message)}</p>
          )}
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="w-20 h-20 object-cover"
            />
          ) : (
            ""
          )}
        </div>
        <div>
          <Button
            type="submit"
            className="w-50 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductsFrom;
