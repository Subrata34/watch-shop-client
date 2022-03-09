import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Menubar from "./Components/MenuBar/Menubar";
import Dashbar from "./Components/Dashbar/Dashbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="footer" element={<Footer/>}/>
          <Route path="menubar" element={<Menubar/>}/>
          <Route path="dashbar" element={<Dashbar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
