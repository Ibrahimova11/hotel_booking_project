import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Destinations from "./pages/Destinations";
import Detail from "./pages/Detail"
import Blog from "./pages/Blog";
import BlogDetail from "./pages/Blog/BlogDetail/BlogDetail.jsx";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import List from "./pages/List";
import Hotel from "./pages/Hotels";



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
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blogdetail/:id" element={<BlogDetail/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/sign-in" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
