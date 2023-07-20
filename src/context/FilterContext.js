import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import filterReducer from "../reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
}

const FilterProvider = ({ children }) => {
    const { products } = useProductContext();

    const [state, dispatch] = useReducer(filterReducer, initialState);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    const setGridView = ()=>{
        dispatch({type:"SET_GRID_VIEW"})
    }


    return (
        <FilterContext.Provider value={{ ...state, setGridView }} >
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(FilterContext)
}
export { FilterProvider, useFilterContext }