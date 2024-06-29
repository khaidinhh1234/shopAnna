import { IProducts } from "../interface/products";
import instance from "./../config/axios";

export const getProducts = async () => {
  try {
    const { data } = await instance.get("/products");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getById = async (id: string) => {
  try {
    const { data } = await instance.get("/products/" + id);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (product: IProducts) => {
  try {
    const { data } = await instance.post("/products", product);

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteById = async (id: string | number) => {
  try {
    const { data } = await instance.delete(`/products/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updateProduct = async (product: IProducts) => {
  try {
    const { data } = await instance.put(`/products/${product.id}`, product);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
