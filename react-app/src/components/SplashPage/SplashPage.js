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
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/NiVdFpawZs8?&controls=0&autoplay=1&cc_load_policy=3&mute=1&showinfo=0&autohite=1&rel=0&modestbranding=1&loop=1&playlist=NiVdFpawZs8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
        <div class="overlay"></div>
        <div class="splash-text">
          <h2>
            It's not about the cards you're dealt, But how you play the hand!
          </h2>
          <p>
            Blackjack is very scientific. There's always a right answer and a
            wrong answer. <br></br> Do you take a card, increase your bet, bet
            big or bet small. <br></br>There's absolutely a right and wrong
            answer.
          </p>
          <div className="splash-buttons">
            {" "}
            <NavLink to="/login">Log In</NavLink>
            {"  "} {/*  do not remove space */}
            <NavLink to="sign-up">Sign Up</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SplashPage;
