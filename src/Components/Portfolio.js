import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import Breakfast from "../images/breakfast.jpg";
// import GadaDashboard from "../images/gada-dashboard.png";
import Gada from "../images/gada-drone-academy.png";
import Techlo from "../images/Techlo.png";
import Proma from "../images/proma.png";
import Salon from "../images/Hair Salon.png";
import Cuisine from "../images/cuisine.png";
// import ProfileApp from "../images/profileApp.jpg";
import NoteBook from "../images/NoteBook App.png";
import portfolio from "../images/Portfolio.png";
import Music from "../images/music-app.png";
import Rodufy from "../images/rodufy.jpg";
import Diy from "../images/Diy.png";

function Portfolio() {
  return (
    <div>
      <Navigation />
      <main>
        <section className="portfolio" id="portfolio-section">
          <div className="container">
            <div className="portfolio__details">
              <h2>Front-end web developer</h2>
              <p>
                Below are projects i created with the technologies used and link
                to the live site
              </p>
              <ul className="portfolio__skills">
                <li className="portfolio__skills-item">Skills:</li>
                <li className="portfolio__skills-item">Html5</li>
                <li className="portfolio__skills-item">CSS3</li>
                <li className="portfolio__skills-item">Bootstrap</li>
                <li className="portfolio__skills-item">Tailwind CSS</li>
                <li className="portfolio__skills-item">Sass</li>
                <li className="portfolio__skills-item">Javascript</li>
                <li className="portfolio__skills-item">Typescript</li>
                <li className="portfolio__skills-item">React</li>
                <li className="portfolio__skills-item">Redux</li>
                <li className="portfolio__skills-item">Git</li>
                <li className="portfolio__skills-item">Node JS</li>
                <li className="portfolio__skills-item">MongoDb</li>
                {/* <li className="portfolio__skills-item">Mongoose</li> */}
                <li className="portfolio__skills-item">Express</li>
                <li className="portfolio__skills-item">Python</li>
                <li className="portfolio__skills-item">MySQL</li>
              </ul>
            </div>
            <div className="project">
              <div className="project__items">
                <a
                  href="https://diy-creative-display.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="project__item">
                    <h5>DIY Creative Display</h5>
                    <img src={Diy} alt="Rodufy website" />
                    <figcaption className="project__text">
                      <ul className="project__text-lists">
                        <li className="project__text-html">Html</li>
                        <li className="project__text-bootstrap">
                          Tailwind CSS
                        </li>
                        <li className="project__text-sass">Next Js</li>
                        <li className="project__text-sass">Typescript</li>
                        <li className="project__text-sass">Redux Toolkit</li>
                        <li className="project__text-sass">Python</li>
                        <li className="project__text-sass">Flask</li>
                        <li className="project__text-sass">MySQL</li>
                      </ul>

                      <span className="project__text-lists-viewmore">
                        Live site
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="project__items">
                <a
                  href="https://techlo.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="project__item">
                    <h5>Techlo</h5>
                    <img src={Techlo} alt="Rodufy website" />
                    <figcaption className="project__text">
                      <ul className="project__text-lists">
                        <li className="project__text-html">Html</li>
                        <li className="project__text-css">Css3</li>
                        <li className="project__text-bootstrap">
                          Styled Component
                        </li>
                        <li className="project__text-javascript">Javascript</li>
                        <li className="project__text-sass">React</li>
                        <li className="project__text-sass">Typescript</li>
                        <li className="project__text-sass">Redux</li>
                        <li className="project__text-sass">GraphQl</li>
                      </ul>

                      <span className="project__text-lists-viewmore">
                        Live site
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="project__items">
                <a
                  href="https://proma.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="project__item">
                    <h5>Proma</h5>
                    <img src={Proma} alt="Rodufy website" />
                    <figcaption className="project__text">
                      <ul className="project__text-lists">
                        <li className="project__text-html">Html</li>
                        <li className="project__text-css">Css3</li>
                        <li className="project__text-bootstrap">
                          Tailwind CSS
                        </li>
                        {/* <li className="project__text-javascript">Javascript</li> */}
                        <li className="project__text-sass">Typescript</li>
                        <li className="project__text-sass">React</li>
                        <li className="project__text-sass">Redux</li>
                        <li className="project__text-sass">Node Js</li>
                        <li className="project__text-sass">Mongoose</li>
                        <li className="project__text-sass">Express</li>
                      </ul>

                      <span className="project__text-lists-viewmore">
                        Live site
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="project__items">
                <a
                  href="https://rodufy-web.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="project__item">
                    <h5>Rodufy App</h5>
                    <img src={Rodufy} alt="Rodufy website" />
                    <figcaption className="project__text">
                      <ul className="project__text-lists">
                        <li className="project__text-html">Html</li>
                        <li className="project__text-css">Css3</li>
                        <li className="project__text-bootstrap">
                          Tailwind CSS
                        </li>
                        <li className="project__text-javascript">Javascript</li>
                        <li className="project__text-sass">React</li>
                        <li className="project__text-sass">Redux</li>
                      </ul>

                      <span className="project__text-lists-viewmore">
                        Live site
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>

              <div className="project__items">
                <a
                  href="https://mini-player.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="project__item">
                    <h5>Music App</h5>
                    <img src={Music} alt="A music app" />
                    <figcaption className="project__text">
                      <ul className="project__text-lists">
                        <li className="project__text-html">Html</li>
                        <li className="project__text-css">Css3</li>
                        <li className="project__text-bootstrap">Javascript</li>
                      </ul>

                      <span className="project__text-lists-viewmore">
                        Live site
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>

              <div className="project__items">
                <a
                  href="https://doodlenote.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="project__item">
                    <h5>NoteBook App</h5>
                    <img src={NoteBook} alt="Note Book App" />
                    <figcaption className="project__text">
                      <ul className="project__text-lists">
                        <li className="project__text-html">Html</li>
                        <li className="project__text-css">Css3</li>
                        <li className="project__text-bootstrap">Bootstrap</li>
                        <li className="project__text-sass">JavaScript</li>
                        <li className="project__text-sass">React</li>
                      </ul>

                      <span className="project__text-lists-viewmore">
                        Live site
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="project__items">
                <a
                  href="https://gadacademy.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="project__item">
                    <h5>Gada Website</h5>
                    <img src={Gada} alt="portfolio web page" />
                    <figcaption className="project__text">
                      <ul className="project__text-lists">
                        <li className="project__text-html">Html</li>
                        <li className="project__text-css">Css3</li>
                        <li className="project__text-bootstrap">Bootstrap</li>
                        <li className="project__text-sass">Sass</li>
                      </ul>

                      <span className="project__text-lists-viewmore">
                        Live site
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>

              <div className="project__items">
                <a
                  href="https://cuisine-restaurante.netlify.app/ "
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="project__item">
                    <h5>Cuisine Restaurant Landing page</h5>
                    <img src={Cuisine} alt="A cafe landing page" />
                    <figcaption className="project__text">
                      <ul className="project__text-lists">
                        <li className="project__text-html">Html</li>
                        <li className="project__text-css">Css3</li>
                        <li className="project__text-javascript">Javascript</li>
                      </ul>

                      <span className="project__text-lists-viewmore">
                        Live site
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>

              <div className="project__items">
                <a
                  href="https://ayeesha-hairsalon.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="project__item">
                    <h5>Hair Salon Landing Page</h5>
                    <img src={Salon} alt="Hair Salon landing page" />
                    <figcaption className="project__text">
                      <ul className="project__text-lists">
                        <li className="project__text-html">Html</li>
                        <li className="project__text-css">Css3</li>
                        <li className="project__text-bootstrap">Javascript</li>
                      </ul>

                      <span className="project__text-lists-viewmore">
                        Live site
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>

              <div className="project__items">
                <a
                  href="https://nkechi-udenkwor.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="project__item">
                    <h5>Portfolio</h5>
                    <img src={portfolio} alt="portfolio web site" />
                    <figcaption className="project__text">
                      <ul className="project__text-lists">
                        <li className="project__text-html">Html</li>
                        <li className="project__text-css">Css3</li>
                        <li className="project__text-bootstrap">Sass</li>
                        <li className="project__text-bootstrap">React</li>
                      </ul>

                      <span className="project__text-lists-viewmore">
                        Live site
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div>

              {/* <div className="project__items">
                <a
                  href="https://profile-application.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <figure className="project__item">
                    <h5>React profile app</h5>
                    <img src={ProfileApp} alt="react profile app" />
                    <figcaption className="project__text">
                      <ul className="project__text-lists">
                        <li className="project__text-html">Html</li>
                        <li className="project__text-css">Css3</li>
                        <li className="project__text-javascript">Javascript</li>
                        <li className="project__text-react">React</li>
                      </ul>

                      <span className="project__text-lists-viewmore">
                        Live site
                      </span>
                    </figcaption>
                  </figure>
                </a>
              </div> */}

              {/* <div className="project__items">
              <a
                href="https://cdpn.io/Belle2/debug/KKKJxBa/gareYdgmLJPr"
                target="_blank"
                rel="noreferrer"
              >
                <figure className="project__item">
                  <h5>Hng web page</h5>
                  <img src={Hng} alt="Hng web page" />
                  <figcaption className="project__text">
                    <ul className="project__text-lists">
                      <li className="project__text-html">Html</li>
                      <li className="project__text-css">Css3</li>
                      <li className="project__text-bootstrap">Bootstrap</li>
                      <li className="project__text-javascript">Javascript</li>
                    </ul>
                    
                      <span className="project__text-lists-viewmore">
                        Live site
                      </span>
                    
                  </figcaption>
                </figure>
              </a>
            </div> */}

              {/* <div className="project__items">
              <a
                href="https://cdpn.io/Belle2/debug/WWELKL/LQAExgZaDyBr"
                target="_blank"
                rel="noreferrer"
              >
                <figure className="project__item">
                  <h5>Portfolio web page</h5>
                  <img src={Portfolio1} alt="portfolio web page" />
                  <figcaption className="project__text">
                    <ul className="project__text-lists">
                      <li className="project__text-html">Html</li>
                      <li className="project__text-css">Css3</li>
                      <li className="project__text-bootstrap">Bootstrap</li>
                    </ul>
                    
                      <span className="project__text-lists-viewmore">
                        Live site
                      </span>
                    
                  </figcaption>
                </figure>
              </a>
            </div> */}
            </div>
          </div>
        </section>
        <section className="angleBracket__section">
          <div>
            <Link to="/Contact">
              <div className="angle__link right">
                <span className="angle__link-text text-right">Contact</span>
                <AiOutlineRight className="angle__bracket" />
              </div>
            </Link>
            <Link to="/">
              <div className="angle__link left">
                <AiOutlineLeft className="angle__bracket" />
                <span className="angle__link-text text-left">About</span>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__content--1">
          <p className="footer__content--1-paragraph">
            Want to hire me or get in touch?
            <span>
              You can reach me via email at udenkwornkechi@gmail.com or visit
              the{" "}
              <a href="contact.html" target="_blank" rel="noreferrer">
                contact
              </a>{" "}
              page
            </span>
          </p>
        </div>
        <div className="footer__content--2">
          <span className="footer__content--2-name">
            <Link to="/">Nkechi Udenkwor</Link>
          </span>
          <span className="footer__content--2-arrowup">
            <a href="#portfolio-section">
              <i className="far fa-caret-square-up"></i>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
