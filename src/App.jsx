import "./App.css";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import About from "./components/About/About.jsx";
import Product from "./components/Product/Product.jsx"
import Contact from "./components/Contact/Contact.jsx"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
