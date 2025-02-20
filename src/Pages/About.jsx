import React from "react";
import "../Styles/About.css";
import ProfilePic from "../Images/profile.jpg";
import { TbMilkshake } from "react-icons/tb";
const About = () => {
  return (
    <main>
      <div className="grid-container">
        <div className="content">
          <img src={ProfilePic} alt="Profile" className="profile-image" />
          <p>
            Hey! I’m Viji and I’m a javascript and react developer. I love
            working on the web and ensuring it remains a space for everyone,
            embracing our creative, personal, and unique passions.
          </p>
          <p>
            With that in mind, I've created a unique collection of projects
            focused on Moodz, e-commerce, admin-dashboard and Group-Project.
          </p>
          <p>
            <span className="clear-text"></span>
            "I have collaborated with groups and worked through conflicts. No
            matter the challenges, I always stay strong and focused."
          </p>
          <p>
            Right now I work with the tiny team at front-end from
            FED25-hyper-group, Stockholm where I hang with my husband Bharathi
            and our lovely two kids.
          </p>
          <p>
            I’m a big fan of tamil Rap and yuvan music and love cooking and
            playing with my kids.
          </p>
          <p>
            The word that best describes Viji is Gentle. She seems so gentle
            because of words that brings to life and health.
          </p>
          <p>
            If you’d like to support me, sharing my work with your buds is the
            best way. Means a lot, for real. You can also buy me a MilkShake
            <TbMilkshake className="footer-icon" />.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
