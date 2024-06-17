import React from "react";
import BannerBackground from "../../Assets/image4.jpg";
import Navbar from "../../components/Navbar/Navbar";
import { FiArrowRight } from "react-icons/fi";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import AboutBackgroundImage from "../../Assets/image1.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            STERILIS MEDICARE
          </h1>
          <p className="primary-text">
              <p className="xyz">Strength</p>
              <p className="xyz">Together</p>
              <p className="xyz">Experience</p>
              <p className="xyz">Relationship</p>
              <p className="xyz">Investment</p>
              <p className="xyz">Logistics</p>
              <p className="xyz">Improve</p>
              <p className="xyz">Subcontracting</p>             
          </p>
          <button className="secondary-button">
            Visit us <FiArrowRight />{" "}
          </button>
        </div>
        {/* <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div> */}
      </div>
      <div className="about-section-container">
     
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          The slogan – “Healing is our goal”
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
    <div>
      <h1>HERE WILL WE PRODUCT INFORMATION FOR HOME PAGE</h1>
    </div>
      <Testimonial/>
      <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Home;
