import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value="Altamash">{children}</AppContext.Provider>;
};

// Custom Hook
const useProductContext = ()=>{
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext };
