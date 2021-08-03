import React from "react";
import { NavLink } from "react-router-dom";
import "./SplashPage.css";
import logo from "./bjkids.png";
import video from "./tristy.mp4"

function SplashPage() {
  return (
    <div>
      <section className="splash-container">
        <header>
          <h1 className="logo">
            <img src={logo} alt="logo" width="100px" height="100px" />
            BLAK-JAK
          </h1>
        </header>
        {/* <iframe
          width="1500"
          height="1500"
          src="https://www.youtube.com/embed/NiVdFpawZs8?&controls=0&autoplay=1&cc_load_policy=3&mute=1&showinfo=0&rel=0&loop=1&playlist=eyoh-Ku9TCI"
          frameborder="0"
          title="Youtube Video"
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            width: "100%",
            height: "100%",
            border: "none",
            margin: "0",
            padding: "0",
            overflow: "hidden",
          }}
          allowfullscreen="allowfullscreen"
        ></iframe> */}

        {/* <iframe
          width="3000"
          height="3000"
          src="https://www.youtube.com/embed/NiVdFpawZs8?&controls=0&autoplay=1&cc_load_policy=3&mute=1&showinfo=0&autohite=1&rel=0&modestbranding=1&loop=1&playlist=NiVdFpawZs8&allowfullscreen=allowfullscreen"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
        <video src={video} muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="splash-text">
          <h2>BlaK-JaK</h2>
          <p>
            It black-jack gaming app where the user can play in a single mode or
            multi-player mode.
          </p>
          <div className="splash-buttons">
            {" "}
            <NavLink to="/login">Log In</NavLink>
            {"  "} {/*  do not remove space */}
            <NavLink to="sign-up">Sign Up</NavLink>
          </div>
          <div className="features-container">
            <h1>FEATURES</h1>{" "}
            <p>
              It's not about the cards you're dealt, But how you play the hand!
            </p>
            <div className="features-one">
              <img
                src="https://media.giphy.com/media/26ufcZICbgCSGe5sQ/giphy.gif"
                alt=""
                width="400px"
                height="300px"
              ></img>
              <p>
                Welcome to the landing page! You must login or sign up to
                play!!!
              </p>
            </div>
            <div className="features-two">
              <p>
                Logging in or signing up will take you to the home page.{" "}
                <br></br>
                Here you may see the top players, as well as the ability to
                start a new game.
              </p>
              <img
                src="https://media.giphy.com/media/26ufcZICbgCSGe5sQ/giphy.gif"
                alt=""
                width="400px"
                height="300px"
              ></img>
            </div>
            <div className="features-three">
              <img
                src="https://media.giphy.com/media/26ufcZICbgCSGe5sQ/giphy.gif"
                alt=""
                width="400px"
                height="300px"
              ></img>{" "}
              <p>
                When you select the single player mode you be playing against
                the dealer AI. AI always holds at 17 and plays with one card
                hidden!
              </p>
            </div>
            <div className="features-four">
              <p>
                In multi-player mode, you may play live with up to 4 other
                users. Remember to ready up to start a new match.
              </p>
              <img
                src="https://media.giphy.com/media/26ufcZICbgCSGe5sQ/giphy.gif"
                alt=""
                width="400px"
                height="300px"
              ></img>{" "}
            </div>
          </div>
          <div className="engineers-title">
            <h1>Meet The Developers</h1>
          </div>
          <div className="engineers-container">
            <div className="card-eng">
              <h1 className="engineer-name">Charles Kainrath</h1>
              <img
                src="https://i.ibb.co/dcnD6FV/DSC-8093-1.jpg"
                alt="Screen-Shot-2021-07-28-at-3-00-05-PM"
                border="0"
                width="200px"
                height="200px"
              />

              <div className="engineer-story">
                Charles is detail-oriented software engineer who has experience
                building dynamic web applications using React/Redux on the
                frontend and Flask/SQLAlchemy/PostgreSQL on the backend. Whether
                he is working with a team or solo, Who he is loves to write code
                and produce results.
              </div>

              <div className="engineers-links">
                <div id="githubLink">
                  <a
                    href="https://github.com/chuckkainrath"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </div>
                <div id="linkedinLink">
                  <a
                    href="https://www.linkedin.com/in/chuck-kainrath-42820b20b/"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div id="porfolio-link">
                  <a
                    href="https://chuckkainrath.github.io"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fas fa-user-secret"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-eng">
              <h1 className="engineer-name">Jeb Griffin</h1>
              <img
                src="https://i.ibb.co/rkbqY6J/Screen-Shot-2021-08-02-at-8-50-12-PM-1.jpg"
                alt="Screen-Shot-2021-07-28-at-3-00-05-PM"
                border="0"
                width="200px"
                height="200px"
              />

              <div className="engineer-story">
                Jeb enjoys React projects and working in both front/back end.
                With a history of being a professional chef, Jeb has a passion
                for creativity and unique designs. Upon graduating from App
                Academy's bootcamp, Jeb has worked on other personal projects
                such as <a href="https://eatbambu.herokuapp.com/">Bambu</a>
              </div>

              <div className="engineers-links">
                <div id="githubLink">
                  <a
                    href="https://github.com/JebGriffin85"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </div>
                <div id="linkedinLink">
                  <a
                    href="https://www.linkedin.com/in/jeb-griffin-120631206/"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div id="porfolio-link">
                  <a
                    href="https://jebgriffin85.github.io/"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fas fa-user-secret"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-eng">
              <h1 className="engineer-name">Tristan San Juan</h1>
              <img
                src="https://i.ibb.co/jWPPVx1/Screenshot-20200210-125456-copy.jpg"
                alt="Screen-Shot-2021-07-28-at-3-00-05-PM"
                border="0"
                width="200px"
                height="200px"
              />

              <div className="engineer-story">
                Tristan is an avid gamer, who fell in love worlds being render
                in these game. He love the intricacy of the elements and logic
                behind the creation of these worlds in the game. As a pisces he
                naturally imagines world, but like to bring some of those world
                into the reality. After Covid he took upon this opportunity to
                become a software engineer/developer.
              </div>

              <div className="engineers-links">
                <div id="githubLink">
                  <a
                    href="https://github.com/tristan-88"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </div>
                <div id="linkedinLink">
                  <a
                    href="https://www.linkedin.com/in/tristan-san-juan-75337920b/"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div id="porfolio-link">
                  <a
                    href="https://tristan-88.github.io/"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fas fa-user-secret"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SplashPage;
