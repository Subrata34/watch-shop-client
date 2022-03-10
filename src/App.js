import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Menubar from "./Components/MenuBar/Menubar";
import Dashbar from "./Components/Dashbar/Dashbar";
import Sign from "./Components/Sign/Sign";
import SignUp from "./Components/SignUp/SignUp";
import EntryProducts from "./Components/EnteryProducts/EntryProducts";

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
          <Route path="sign" element={<Sign/>}/>
          <Route path="signUp" element={<SignUp/>}/>
          <Route path="entry" element={<EntryProducts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
