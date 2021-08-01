import React from "react";
import { NavLink } from "react-router-dom";
import "./SplashPage.css";

function SplashPage() {
  return (
    <div>
      <section className="splash-container">
        <header>
          <h1 className="logo">🃏Site Logo goes here</h1>
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

        <iframe
          src="https://www.youtube.com/embed/NiVdFpawZs8?&controls=0&autoplay=1&cc_load_policy=3&mute=1&showinfo=0&autohite=1&rel=0&modestbranding=1&loop=1&playlist=NiVdFpawZs8&allowfullscreen=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
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
        </div>
      </section>
    </div>
  );
}

export default SplashPage;
