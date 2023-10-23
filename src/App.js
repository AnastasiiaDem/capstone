import './App.scss';
import Header from "./components/Header";
import React from "react";
import Routing from "./components/Routing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing/>
      <Footer />
    </div>
  );
}

export default App;
