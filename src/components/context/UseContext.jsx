import React, { useContext } from "react";
import{createContext} from "react";


const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value ={{Fname:"use Context Hook Testing", Age:"22"}}>{children}</AppContext.Provider>;
};
const useGlobalContext = () => {
    return useContext(AppContext);
}
export{AppContext , AppProvider,useGlobalContext }