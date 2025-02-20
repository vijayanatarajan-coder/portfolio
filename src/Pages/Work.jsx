import React from "react";
import "../Styles/Works.css";
import moodz from "../Images/Discover.jpg";
import ecommerce from "../Images/Shop.jpg";
import groupproject from "../Images/gp.svg";
const Work = () => {
  return (
    <main>
      <div className="works">
        <div className="project">
          <a
            href="https://moodzz.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={moodz} alt="moodz" className="work-image" />
            <p>Moodz</p>
          </a>
        </div>

        <div className="project">
          <a
            href="https://vijayanatarajan-coder.github.io/Group-Project/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={groupproject}
              alt="group-project"
              className="work-image"
            />
            <p>Group-Project</p>
          </a>
        </div>

        <div className="project">
          <a
            href="https://kevingarciamartin.github.io/e-commerce/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ecommerce} alt="e-commerce" className="work-image" />
            <p>E-Commerce</p>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Work;
