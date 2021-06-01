import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Breakfast from "../images/breakfast.jpg";
import GadaDashboard from "../images/gada-dashboard.png";
import Gada from "../images/gada-drone-academy.png";
import Growtify from "../images/growtify.jpg";
import Hng from "../images/hng.jpg";
import Portfolio1 from "../images/portfolio1.jpg";
import Portfolio2 from "../images/portfolio2.jpg";
import ProfileApp from "../images/profileApp.jpg";

function Portfolio() {
  return (
    <div>
      <Navigation />
      <main>
        <section class="portfolio" id="portfolio-section">
          <div class="portfolio__details">
            <h2>Front-end web developer</h2>
            <p>
              Below are projects i created for responsive web design course at
              FreeCodeCamp, internship at HNG, and my personal projects.
            </p>
            <ul class="portfolio__skills">
              <li class="portfolio__skills-item">Skills:</li>
              <li class="portfolio__skills-item">Html5</li>
              <li class="portfolio__skills-item">CSS3</li>
              <li class="portfolio__skills-item">Bootstrap</li>
              <li class="portfolio__skills-item">Javascript</li>
              <li class="portfolio__skills-item">Sass</li>
              <li class="portfolio__skills-item">Git</li>
              <li class="portfolio__skills-item">React</li>
            </ul>
          </div>
          <div class="project">
            <div class="project__items">
              <a
                href="https://gada-drone-academy.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <figure class="project__item">
                  <h5>Gada Website</h5>
                  <img src={Gada} alt="portfolio web page" />
                  <figcaption class="project__text">
                    <ul class="project__text-lists">
                      <li class="project__text-html">Html</li>
                      <li class="project__text-css">Css3</li>
                      <li class="project__text-bootstrap">Bootstrap</li>
                      <li class="project__text-sass">Sass</li>
                    </ul>
                    <h6>
                      <span class="project__text-lists-viewmore">
                        View more
                      </span>
                    </h6>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div class="project__items">
              <a
                href="https://gada-dashboard.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <figure class="project__item">
                  <h5>Gada Dashboard</h5>
                  <img src={GadaDashboard} alt="portfolio web page" />
                  <figcaption class="project__text">
                    <ul class="project__text-lists">
                      <li class="project__text-html">Html</li>
                      <li class="project__text-css">Css3</li>
                      <li class="project__text-bootstrap">Bootstrap</li>
                      <li class="project__text-sass">Sass</li>
                      <li class="project__text-javascript">Javascript</li>
                    </ul>
                    <h6>
                      <span class="project__text-lists-viewmore">
                        View more
                      </span>
                    </h6>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div class="project__items">
              <a
                href="https://cdpn.io/Belle2/debug/KJrQWz/bZMQWKdwVwQA"
                target="_blank"
                rel="noreferrer"
              >
                <figure class="project__item">
                  <h5>Breakfast Cafe web page</h5>
                  <img src={Breakfast} alt="A cafe landing page" />
                  <figcaption class="project__text">
                    <ul class="project__text-lists">
                      <li class="project__text-html">Html</li>
                      <li class="project__text-css">Css3</li>
                    </ul>
                    <h6>
                      <span class="project__text-lists-viewmore">
                        View more
                      </span>
                    </h6>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div class="project__items">
              <a
                href="https://cdpn.io/Belle2/debug/jOOXyJW/NjrYzGNPOywA"
                target="_blank"
                rel="noreferrer"
              >
                <figure class="project__item">
                  <h5>Portfolio web page</h5>
                  <img src={Portfolio2} alt="portfolio web page" />
                  <figcaption class="project__text">
                    <ul class="project__text-lists">
                      <li class="project__text-html">Html</li>
                      <li class="project__text-css">Css3</li>
                      <li class="project__text-bootstrap">Bootstrap</li>
                    </ul>
                    <h6>
                      <span class="project__text-lists-viewmore">
                        View more
                      </span>
                    </h6>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div class="project__items">
              <a
                href="https://cdpn.io/Belle2/debug/pozVOqq/WPALYRxEJGEk"
                target="_blank"
                rel="noreferrer"
              >
                <figure class="project__item">
                  <h5>Growtify web page</h5>
                  <img src={Growtify} alt="growtify landing page" />
                  <figcaption class="project__text">
                    <ul class="project__text-lists">
                      <li class="project__text-html">Html</li>
                      <li class="project__text-css">Css3</li>
                      <li class="project__text-bootstrap">Bootstrap</li>
                    </ul>
                    <h6>
                      <span class="project__text-lists-viewmore">
                        View more
                      </span>
                    </h6>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div class="project__items">
              <a
                href="https://profile-application.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <figure class="project__item">
                  <h5>React profile app</h5>
                  <img src={ProfileApp} alt="react profile app" />
                  <figcaption class="project__text">
                    <ul class="project__text-lists">
                      <li class="project__text-html">Html</li>
                      <li class="project__text-css">Css3</li>
                      <li class="project__text-javascript">Javascript</li>
                      <li class="project__text-react">React</li>
                    </ul>
                    <h6>
                      <span class="project__text-lists-viewmore">
                        View more
                      </span>
                    </h6>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div class="project__items">
              <a
                href="https://cdpn.io/Belle2/debug/KKKJxBa/gareYdgmLJPr"
                target="_blank"
                rel="noreferrer"
              >
                <figure class="project__item">
                  <h5>Hng web page</h5>
                  <img src={Hng} alt="Hng web page" />
                  <figcaption class="project__text">
                    <ul class="project__text-lists">
                      <li class="project__text-html">Html</li>
                      <li class="project__text-css">Css3</li>
                      <li class="project__text-bootstrap">Bootstrap</li>
                      <li class="project__text-javascript">Javascript</li>
                    </ul>
                    <h6>
                      <span class="project__text-lists-viewmore">
                        View more
                      </span>
                    </h6>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div class="project__items">
              <a
                href="https://cdpn.io/Belle2/debug/WWELKL/LQAExgZaDyBr"
                target="_blank"
                rel="noreferrer"
              >
                <figure class="project__item">
                  <h5>Portfolio web page</h5>
                  <img src={Portfolio1} alt="portfolio web page" />
                  <figcaption class="project__text">
                    <ul class="project__text-lists">
                      <li class="project__text-html">Html</li>
                      <li class="project__text-css">Css3</li>
                      <li class="project__text-bootstrap">Bootstrap</li>
                    </ul>
                    <h6>
                      <span class="project__text-lists-viewmore">
                        View more
                      </span>
                    </h6>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer class="footer">
        <div class="footer__content--1">
          <p class="footer__content--1-paragraph">
            Want to hire me or get in touch?
            <span>
              You can reach me via email at udenkwornkechi@gmail.com or visit
              the
              <a href="contact.html" target="_blank" rel="noreferrer">
                contact
              </a>{" "}
              page
            </span>
          </p>
        </div>
        <div class="footer__content--2">
          <span class="footer__content--2-name">
            <Link to="/">Nkechi Udenkwor</Link>
          </span>
          <span class="footer__content--2-arrowup">
            <a href="#portfolio-section">
              <i class="far fa-caret-square-up"></i>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
