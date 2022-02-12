import React from "react";
import "./app.scss";
import Navbar from "./components/navbar";
import Iam from "./sections/iam"


function App() {
  return (
    <div className="container-app">
      <Navbar />
     <Iam />
    </div>
  );
}

export default App;
