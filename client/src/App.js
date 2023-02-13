import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Destinations from "./pages/Destinations";
import Detail from "./pages/Detail"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/destinations" element={<Destinations/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
