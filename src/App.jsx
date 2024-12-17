import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* app body  */}
      <div className="app__body">
        {/* sidebar  */}
        <Sidebar />
        {/* feed  */}
        {/* right part widgets  */}
      </div>
    </div>
  );
};

export default App;
