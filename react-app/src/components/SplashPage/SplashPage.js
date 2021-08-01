import React from "react";
import { NavLink } from "react-router-dom";
import "./SplashPage.css";
import logo from "./bjkids.png";

function SplashPage() {
  return (
    <div>
      <section className="splash-container">
        <header>
          <h1 className="logo">
            <img src={logo} alt="logo" width="100px" height="100px" />BLAK-JAK
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

        <div className="overlay"></div>
        <div className="splash-text">
          <h2>BlaK-JaK</h2>
          <p>
            It's not about the cards you're dealt, But how you play the hand!
          </p>
          <div className="splash-buttons">
            {" "}
            <NavLink to="/login">Log In</NavLink>
            {"  "} {/*  do not remove space */}
            <NavLink to="sign-up">Sign Up</NavLink>
          </div>
          <div className="features-container">
            <h1>FEATURES</h1>
            <div className="features-one">
              <img
                src="https://media.giphy.com/media/26ufcZICbgCSGe5sQ/giphy.gif"
                alt=""
                width="400px"
                height="300px"
              ></img>
              <p>
                When you arrived in landing page you can either log-in as a
                existing user or sign-in as a new register user.
              </p>
            </div>
            <div className="features-two">
              <p>
                After you log-in or sign-in you can see the be at home page.{" "}
                <br></br>
                Where you will see your record on nav bar as well quick links to
                single and muli-player more
                <br></br>and the leader board as well as buttons to play in
                single or multi player modes.
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
                the dealer AI.
              </p>
            </div>
            <div className="features-four">
              <p>
                In multi-player mode, you can then play with other players going
                against the dealer.
              </p>
              <img
                src="https://media.giphy.com/media/26ufcZICbgCSGe5sQ/giphy.gif"
                alt=""
                width="400px"
                height="300px"
              ></img>{" "}
            </div>
          </div>
          <div className="engineers-container">
            <div className="card-eng">
              <h1 className="engineer-name">Charles Kainrath</h1>
              <img
                src="https://i.ibb.co/Fwg3NDP/Screen-Shot-2021-07-28-at-3-00-05-PM.png"
                alt="Screen-Shot-2021-07-28-at-3-00-05-PM"
                border="0"
                width="200px"
                height="200px"
              />
              <div className="engineer-story">
                Wore different hats in the retail industry from specialist, to
                lead, to stock, and different levels of management for about 18
                years. Along the way I also gain experience in hospitality field
                as well as in the food industry. Being a pisces I create and
                escape into many world which why the gaming world appeal to me.
                World of gaming is vast and always created a safe haven for me.
                However, what really appeal to me is the world with-in the game
                and the many elements that forms it. So due to covid closing
                some doors of opportunity. I took the opportunity to strive to
                become a Software Engineer.
              </div>

              <div className="engineers-links">
                <div id="githubLink">
                  <a
                    href="https://github.com/chuckkainrath"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </div>
                <div id="linkedinLink">
                  <a
                    href="https://www.linkedin.com/in/chuck-kainrath-42820b20b/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div id="porfolio-link">
                  <a
                    href="https://chuckkainrath.github.io"
                    target="_blank"
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
                src="https://i.ibb.co/xS3pqxZ/Screen-Shot-2021-07-28-at-2-59-44-PM.png"
                alt="Screen-Shot-2021-07-28-at-3-00-05-PM"
                border="0"
                width="200px"
                height="200px"
              />
              <div className="engineer-story">
                Wore different hats in the retail industry from specialist, to
                lead, to stock, and different levels of management for about 18
                years. Along the way I also gain experience in hospitality field
                as well as in the food industry. Being a pisces I create and
                escape into many world which why the gaming world appeal to me.
                World of gaming is vast and always created a safe haven for me.
                However, what really appeal to me is the world with-in the game
                and the many elements that forms it. So due to covid closing
                some doors of opportunity. I took the opportunity to strive to
                become a Software Engineer.
              </div>

              <div className="engineers-links">
                <div id="githubLink">
                  <a
                    href="https://github.com/JebGriffin85"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </div>
                <div id="linkedinLink">
                  <a
                    href="https://www.linkedin.com/in/jeb-griffin-120631206/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div id="porfolio-link">
                  <a
                    href="https://jebgriffin85.github.io/"
                    target="_blank"
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
                src="https://i.ibb.co/Y855xF8/Screenshot-20200210-125456-copy.png"
                alt="Screen-Shot-2021-07-28-at-3-00-05-PM"
                border="0"
                width="200px"
                height="200px"
              />

              <div className="engineer-story">
                Wore different hats in the retail industry from specialist, to
                lead, to stock, and different levels of management for about 18
                years. Along the way I also gain experience in hospitality field
                as well as in the food industry. Being a pisces I create and
                escape into many world which why the gaming world appeal to me.
                World of gaming is vast and always created a safe haven for me.
                However, what really appeal to me is the world with-in the game
                and the many elements that forms it. So due to covid closing
                some doors of opportunity. I took the opportunity to strive to
                become a Software Engineer.
              </div>

              <div className="engineers-links">
                <div id="githubLink">
                  <a
                    href="https://github.com/tristan-88"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-github-alt"></i>
                  </a>
                </div>
                <div id="linkedinLink">
                  <a
                    href="https://www.linkedin.com/in/tristan-san-juan-75337920b/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div id="porfolio-link">
                  <a
                    href="https://tristan-88.github.io/"
                    target="_blank"
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
