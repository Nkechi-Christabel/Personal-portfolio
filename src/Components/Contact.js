import React from "react";
import Navigation from "./Navigation";

function Contact() {
  return (
    <div>
      <Navigation />
      <main>
        <section class="contact">
          <div class="contact__container">
            <div class="contact__text">
              <h2>Get in Touch</h2>
              <p>
                Have a question, want to collaborate or you want to say Hi?{" "}
                <br />
                Fill up the form below or send an email to
                udenkwornkechi@gmail.com
              </p>
            </div>

            <div class="contact__form">
              <form
                action="https://getform.io/f/5e385d48-961a-4649-9c87-64da212a6a58"
                method="POST"
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <br />
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  columns="50"
                  placeholder="Your message"
                  required
                ></textarea>
                <br />
                <input type="submit" value="Submit" />
              </form>
            </div>

            <div class="contact__social-links">
              <h4 class="contact__social-links-heading">Let's link up!</h4>
              <span class="twitter">
                <a
                  href="https://twitter.com/home"
                  target="_blank"
                  rel="noreferrer"
                  class="twitter__link"
                >
                  <i class="fab fa-twitter"></i> Twitter
                </a>
              </span>
              <span class="github">
                <a
                  href="https://github.com/Nkechi-Christabel"
                  target="_blank"
                  rel="noreferrer"
                  class="github__link"
                >
                  <i class="fab fa-github"></i>Github
                </a>
              </span>
              <span class="linkedin">
                <a
                  href="https://www.linkedin.com/in/nkechi-udenkwor-06b622198/"
                  target="_blank"
                  rel="noreferrer"
                  class="linkedin__link"
                >
                  <i class="fab fa-linkedin-in"></i>Linkedin
                </a>
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
