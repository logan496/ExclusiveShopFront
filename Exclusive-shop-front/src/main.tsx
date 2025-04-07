import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar.tsx";
import Register from "./pages/Register.tsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./pages/Login.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Footer from "./components/common/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </Router>,
);
