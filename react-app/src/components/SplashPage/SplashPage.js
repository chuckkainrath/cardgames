import React from "react";
import { NavLink } from "react-router-dom";
import "./SplashPage.css";

function SplashPage() {
  return (
    <div>
      <section class="splash-container">
        <header>
          <h1 class="logo">🃏Site Logo goes here</h1>
        </header>
        <iframe
          src="https://www.youtube.com/embed/eyoh-Ku9TCI?&autoplay=1&iv_load_policy=3&playlist=eyoh-Ku9TCI&loop=1&mute=1&controls=0&showinfo=0&"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
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
          <NavLink to="/login">Log In</NavLink>
          {"  "} {/*  do not remove space */}
          <NavLink to="sign-up">Sign Up</NavLink>
        </div>
      </section>
    </div>
  );
}

export default SplashPage;
