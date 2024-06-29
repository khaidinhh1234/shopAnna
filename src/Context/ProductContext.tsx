import { createContext, useEffect, useReducer } from "react";
import { getProducts } from "../service/products";
import productsReducer from "../Reducer/productreducer";
export const ProductContext = createContext<any>(null);
export const ProductContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(productsReducer, { products: [] });
  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts();

        dispatch({ type: "GET_PRODUCTS", payload: data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
