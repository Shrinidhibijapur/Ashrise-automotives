import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Collections from "./pages/Collections";
import Contact from "./pages/Contact";
import CarDetails from "./pages/CarDetails";
import Footer from "./components/Footer";

import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />   

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/car/:name" element={<CarDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
