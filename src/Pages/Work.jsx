import React from "react";
import "../Styles/Works.css";
import StarBackground from "../Components/StarBackground";

const Work = () => {
  return (
    <main className="work-main">
      <section className="work-wrapper">
        <StarBackground />

        <section className="works">
          <h2 className="hide-heading">Projects</h2>
          <article className="project">
            <a
              href="https://moodzz.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Moodz Project - View live"
            >
              <p>Moodz</p>
            </a>
          </article>
          <article className="project">
            <a
              href="https://vijayanatarajan-coder.github.io/Group-Project/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Group-Project - View live"
            >
              <p>Group-Project</p>
            </a>
          </article>
          <article className="project">
            <a
              href="https://kevingarciamartin.github.io/e-commerce/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="E-Commerce Project - View live"
            >
              <p>E-Commerce</p>
            </a>
          </article>
          <article className="project">
            <a
              href="https://github.com/vijayanatarajan-coder/fakeKart"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FakeKart - View on GitHub"
            >
              <p>FakeKart</p>
            </a>
          </article>
          <article className="project">
            <a
              href="https://meal-explorer.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Recipe-Explorer Project - View live"
            >
              <p>Recipe-Explorer</p>
            </a>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Work;
