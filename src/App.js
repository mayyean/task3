import React from "react";
import MainRoutes from "./routing/MainRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="main__container">
      <Navbar />
      <div className="main">
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
