import React from "react";
import BannerBackground from "../../Assets/image4.jpg";
import Navbar from "../Navbar/Navbar";
import { FiArrowRight } from "react-icons/fi";

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
            Here will be a description about website
          </p>
          <button className="secondary-button">
            Visit us <FiArrowRight />{" "}
          </button>
        </div>
        {/* <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
