import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Test2 from "./components/Test2.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="min-h-[100vh] text-white bg-gradient-to-b from-[#da6088] to-[#ff9858]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/test/" element={<Test2 />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
