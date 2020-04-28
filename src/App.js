import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import TourList from "./components/tourlist/TourList";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <TourList></TourList>
    </React.Fragment>
  );
}

export default App;
