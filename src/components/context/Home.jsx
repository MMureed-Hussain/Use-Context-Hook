// import React, { useContext } from "react";
import Provider from "./Provider";
import UseContext from "./UseContext";
// import UseContext from "./components/context/UseContext";
// import {AppContext} from "./UseContext"
import {useGlobalContext} from "./UseContext"

export default function Home() {
    const {Fname , Age} = useGlobalContext();
    // const title = React.useContext(AppContext);
  return (
    <>
      <div>{Fname} Home Page with title of this {Age}</div>

    </>
  );
}
