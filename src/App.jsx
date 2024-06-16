import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Product from "./components/Product/Product.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Product/>
      <Testimonial />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
