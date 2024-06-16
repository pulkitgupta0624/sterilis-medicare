import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import './AboutMain.css'

const About = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="about-image">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <h2>HISTORY</h2>
        <p>
          Sterilis from the Spanish language means "Sterile or Injection" — these words are the best characterization of our company. This promise is our responsibility we take to society.
        </p>
        <h2>BRAND LEGEND</h2>
        <p>
          In 2021 a team of professionals with the knowledge and competence in the pharmaceutical industry has entered the market of supply of pharmaceutical product supply under Sterilis brand. Accumulated experience in manufacturing, outsourcing and marketing of pharmaceutical products, innovative approach of managing and optimizing business processes has allowed us to become actively present in more than 4 countries in less than three years. We maintain strong partnership with leading manufacturers, gradually increasing our range of competencies that allowed us to cover a full range of services in the pharmaceutical industry.
        </p>
        <h2>BRAND LOGO</h2>
        <div className="brand-logo">
          <div className="brand-logo-section">
            <h3>Strength</h3>
            <p>Core pharmaceutical expert in R&D, F&D, manufacturing, quality, regulatory and marketing.</p>
          </div>
          <div className="brand-logo-section">
            <h3>Together</h3>
            <p>We grow together with partners, offering them individual solutions for building business processes, developing and improving technologies.</p>
          </div>
          <div className="brand-logo-section">
            <h3>Experience</h3>
            <p>Many years of experience have developed our competence in such pharmaceutical fields as marketing research, product registration, product promotion, sales management, development and production of pharmaceutical products, pharmacovigilance, etc., which we are ready to share with our partners.</p>
          </div>
          <div className="brand-logo-section">
            <h3>Relationship</h3>
            <p>Stabilizing good relation with manufacturer, exporter, trader, retailer and customer with satisfactory survives.</p>
          </div>
          <div className="brand-logo-section">
            <h3>Investment</h3>
            <p>We are investing in product designing, development, Quality and services.</p>
          </div>
          <div className="brand-logo-section">
            <h3>Logistics</h3>
            <p>Established distribution channels for timely delivery allow us to reduce production cycles and storage space</p>
          </div>
          <div className="brand-logo-section">
            <h3>Improve</h3>
            <p>Our Improvement and versatile approach opens up great opportunities for partners and customers: to launch their products in the markets even in remote regions and to promote them with the use of well-established communication channels.</p>
          </div>
          <div className="brand-logo-section">
            <h3>Subcontracting</h3>
            <p>Providing centralized management of the pharmaceutical industry allowing partners to focus on their core competencies, while our team is in charge of manufacturing and marketing.</p>
          </div>
        </div>
        <h2>BRAND SLOGAN</h2>
        <p className="larger">The slogan – “Healing is our goal”</p>
        <p>(setting goal for patient healing and recovery) - expresses the mission of our company and its employees – To develop new Product people, enjoy, that feed our research and creativity, that make patient happy. Considering our current activities, we focus on a partnership not only with manufacturers, but also with the healthcare systems. We believe that together we can search for solutions that can meet the needs of patients. By maintaining and improving the high quality of products altogether we open up great prospects for our partners in the pharmaceutical industry. For consumers it means the opportunity to purchase effective and affordable drugs. We contribute to improving the quality of life of people around the world by developing our company and its activities.</p>
        <h2>MISSION & VISION</h2>
        <p>The mission of our company is to contribute to protection and maintenance the health of as many people as possible by providing quality and affordable pharmaceutical products. Our vision is to take a leading position in the markets where we operate and in the future on a global scale.</p>
        <h2>VALUES</h2>
        <p>During its existence, our company has developed sustainable values that are shared by all employees, regardless of their positions in the company. We hold these values in all our activities and share the same with our customers and partners. They include: Respect, Team spirit, Innovation, Responsibility, Professionalism, Efficacy, Self-realization, Trust. One of our company priorities is corporate culture. We strongly believe that our power is in diversity and mutual respect and strive to ensure that our employees work in a positive work environment.</p>
        
      </div>
      <Footer/>
    </div>
  );
};

export default About;
