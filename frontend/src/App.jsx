import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Navbar from "./navbar/Navbar"; // ✅ lowercase folder, exact file name
import Footer from "./navbar/Footer";


function App() {
  return (
    <>
      {/* Navbar appears on all pages */}
      <Navbar />

      {/* Routes define page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
