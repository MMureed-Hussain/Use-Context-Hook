import { createContext } from "react";

export const AppUserContext = createContext()
export const AppUserProvider = ({props}) => {
    return <AppUserContext.Provider value={{}}>{props.children}</AppUserContext.Provider>;
};