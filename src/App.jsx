// import logo from "./logo.svg";
import "./App.css";
import Main from "./components/user/Main";
import Provider from "./components/context/Provider";
import ApiMain from "./components/apipages/ApiMain";

function App() {
  return (
    <>
      <div className="App">
        <Main/>
        <ApiMain/>
        {/* <Home/> */}
        {/* <Provider /> */}
      </div>

    </>
  );
}

export default App;
