import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function About() {
  return (
    <div>
      <Navigation />
      <main>
        <section className="introduction">
          <div className="introduction__text-box">
            <h1 className="introduction__textIn--top">
              Hello, my name is Nkechi Udenkwor.
            </h1>
            <p className="introduction__textIn--left">
              A creative and growth-minded Web Developer with a proven track
              record of designing and developing beautiful, responsive, and
              interactive websites. Committed to staying updated with the latest
              trends and technologies in web development to deliver exceptional
              results.
              {/* A creative, growth-minded Web Developer. Passionate about building
              beautiful, responsive, interactive, innovative websites. */}
              {/* A creative, growth-minded Front-end web developer. Passionate about
              building responsive, interactive, innovative, accessible,
              SEO-friendly, and fast websites. View my projects on the web
              portfolio page. Article for Scrimba's 24 days of #JavaScriptmas
              Click Here. */}
            </p>
            <p className="introduction__textIn--bottom">
              View my projects in the <Link to="/portfolio">portfolio</Link>
              &nbsp;page. Want to know what happens under the hood when you make
              an https request?
              <a
                href="https://medium.com/@udenkwornkechi/what-happens-when-you-type-https-www-google-com-in-your-browser-and-press-enter-41c691ff8c9a"
                target="_blank"
                rel="noreferrer"
                className="introduction__text-article"
              >
                &nbsp;Click Here.
              </a>
              {/* Article for Scrimba's 24 days of #JavaScriptmas
              <a
                href="https://nkechi.hashnode.dev/scrimbas-24-days-of-javascriptmas"
                target="_blank"
                rel="noreferrer"
                className="introduction__text-article"
              >
                &nbsp;Click Here.
              </a> */}
            </p>
          </div>

          <div className="introduction__socialicons">
            <span className="twitter">
              <a
                href="https://twitter.com/home"
                target="_blank"
                rel="noreferrer"
                className="twitter__link"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </span>
            <span className="github">
              <a
                href="https://github.com/Nkechi-Christabel"
                target="_blank"
                rel="noreferrer"
                className="github__link"
              >
                <i className="fab fa-github"></i>
              </a>
            </span>
            <span className="linkedin">
              <a
                href="https://www.linkedin.com/in/nkechi-udenkwor-06b622198/"
                target="_blank"
                rel="noreferrer"
                className="linkedin__link"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
          </div>

          <Link to="/portfolio" className="Introduction__portfolio-link">
            <div className="introduction__portfolio">
              <p className="introduction__portfolio-text">Portfolio</p>
              <span className="introduction__portfolio-arrow">
                <i className="fas fa-long-arrow-alt-down"></i>
              </span>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default About;
