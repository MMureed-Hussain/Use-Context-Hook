import React, { useEffect, useState } from 'react'
// import { AppContext } from './UseContext'

export const AppContext = React.createContext();

 const Provider =(children)=> {
    const [data,setData]=useState([])
    const fetchData =() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => 
            setData(res.data))
            console.warn(setData)
    }
    useEffect(() =>{
        fetchData();
        // console.warn(data)
    },[])
    // const Provider = AppContext
    // return(
    //     <Provider value={data}>
    //         {children}
    //     </Provider>
    // )

      return <AppContext.Provider value ={data && data}>{children}</AppContext.Provider>;
  
}
export default Provider;