import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
/*import LoginSignUp from "./components/LoginSignUp";*/
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Men from "./components/Men";
import Women from "./components/Women";
import Unisex from "./components/Unisex";
import Accessories from "./components/Accessories";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/unisex" element={<Unisex />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
