import { IProduct } from "../interface/products";

const productsReducer = (state: any, action: any) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "UPDATE_PRODUCT":
      const updatedProduct = action.payload;
      const updatedProducts = state.products.map((product: IProduct) => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        }
        return product;
      });
      return {
        ...state,
        products: updatedProducts,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product: IProduct) => product.id !== action.payload
        ),
      };
    case "SEARCH_PRODUCT":
      return {
        ...state,
        products: state.products.filter((product: IProduct) =>
          action.payload === ""
            ? product
            : product.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    default:
      return state;
  }
};
export default productsReducer;
