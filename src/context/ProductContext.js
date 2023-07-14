import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import productReducer from "../reducers/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
}

// const productReducer = () => {

// }


const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(productReducer, initialState)

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" })
    try {
      const res = await axios.get(url)
      const products = await res.data;
      dispatch({ type: "MY_API_DATA", payload: products })
    } catch (error) {
      dispatch({ type: "API_ERROR" })
    }
  }

  useEffect(() => {
    getProducts(API);
  }, [])

  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
};

// Custom Hook
const useProductContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext };
