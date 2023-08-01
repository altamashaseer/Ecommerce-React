import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import filterReducer from "../reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting: "",
    filters: {
        category: "All",
        company: "All",
        color: "All",
        minPrice: 0,
        maxPrice: 0,
        price: 0,
    },
};


const FilterProvider = ({ children }) => {
    const { products } = useProductContext();

    const [state, dispatch] = useReducer(filterReducer, initialState);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    // to set the grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    };

    // to set the list view
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    };

    //sorting
    const setSortingOption = (option) => {
        dispatch({ type: "SET_SORTING_OPTION", payload: option });
    };

    // Set search term
    const setSearchTerm = (term) => {
        dispatch({ type: "SET_SEARCH_TERM", payload: term });
    };

    // Filter by category
    const filterByCategory = (category) => {
        dispatch({ type: "FILTER_BY_CATEGORY", payload: category });
    };

    // Filter by color
    const filterByColor = (color) => {
        dispatch({ type: "FILTER_BY_COLOR", payload: color });
    };

    // Filter by company
    const filterByCompany = (company) => {
        dispatch({ type: "FILTER_BY_COMPANY", payload: company });
    };
    //filter by price 
    const filterByPrice = (price) => {
        dispatch({ type: "FILTER_BY_PRICE", payload: price })
    }
    // Reset filters
    const resetFilters = () => {
        dispatch({ type: "RESET_FILTERS" });
    };



    return (
        <FilterContext.Provider value={{
            ...state,
            setGridView,
            setListView,
            setSortingOption,
            setSearchTerm,
            filterByCategory,
            filterByColor,
            filterByCompany,
            filterByPrice,
            resetFilters,
        }} >
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(FilterContext)
}
export { FilterProvider, useFilterContext }