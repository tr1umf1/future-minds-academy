import React from "react";
import "./css/fma-general.css"
import "./css/style.css"
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="container-fluid">
        <Header />
        <div className="row">
          <Nav />
          <Main />
        </div>
    </div>
  );
}

export default App;
