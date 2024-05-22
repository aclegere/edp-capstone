import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./Home";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
/*import LoginSignUp from "./components/LoginSignUp";*/
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
