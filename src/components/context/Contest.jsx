import React, { useContext } from "react";
import{createContext} from "react";

   export const AppContext = React.createContext();
   export const AppProvider = ({children}) => {
    return <AppContext.Provider value ={{}}>{children}</AppContext.Provider>;
   }
    