import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Register";
//import Register from "./pages/Register";
//import Login from "./pages/Login";
import { BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route exact path="/menu"  element={<Menu/>} />
          <Route exact path="/about"  element={<About/>} />
          <Route exact path="/contact"  element={<Contact/>} />
          <Route exact path="/auth"  element={<Auth/>} />
         </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
