import React from "react";
import resumeImage from "../Images/vijayaResume.pdf";
//import { Link } from "react-router-dom";
import "../Styles/Thoughts.css";
const Thoughts = () => {
  return (
    <main>
      <section className="thoughts">
        <section className="resume-section">
          <h2>My Resume</h2>

          <p>
            <a href={resumeImage} target="_blank" rel="noopener noreferrer">
              Here is my resume
            </a>
            . I focused on clarity, readability, and design aesthetics to make
            it stand out.
          </p>

          <div className="resume-thoughts">
            <h3>Why I Designed It This Way</h3>
            <p>
              Clear Sections : I structured it to highlight my strengths
              upfront.
              <br />
              Minimalist Design : Used clean fonts and spacing for readability.
              <br />
              Impact-Oriented : Focused on measurable achievements.
              <br />
              ATS-Friendly : Ensured it works well with job application
              software.
            </p>
          </div>
        </section>
        <section className="portfolio-section">
          <h2>My Portfolio</h2>
          <div className="portfolio-thoughts">
            <h3>Why I Designed My Portfolio This Way</h3>
            <p>
              I got inspiration from lynn Fisher she is one of the web designer
              and developer.
            </p>
            <p>
              Minimalist UI : Used a clean design to ensure easy navigation.
              <br />
              React : Built with React and CSS for speed and responsiveness.
              <br />
              Dark/Light Mode : Implemented a theme switcher for better user
              experience.
              <br />
              Fully Responsive : Works perfectly on desktop, tablet, and mobile.
            </p>
          </div>
        </section>
        {/* <section className="Design-section">
          <h2>Design Thinking</h2>
          <Link to="/PatientsDesign" className="patentsdesign">
            Click here to see the design.
          </Link>
          <br />I focused on clarity, readability, and design aesthetics to make
          it stand out.
          <div className="Design-thoughts">
            <h3>Why I Designed It This Way</h3>
            <p>
              User-Friendly for Patients : Focused on accessibility.
              <br />
              Clear Information Display : Patients can easily navigate.
              <br />
              Soft Colors & Calming UI : Enhances user experience.
            </p>
          </div>
        </section> */}
      </section>
    </main>
  );
};

export default Thoughts;
