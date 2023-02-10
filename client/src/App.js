import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import List from "./pages/List";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
