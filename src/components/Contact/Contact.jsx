import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
        <Navbar/>
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You!</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
