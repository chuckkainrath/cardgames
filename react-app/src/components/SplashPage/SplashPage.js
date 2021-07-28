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
        <video
          src="https://r4---sn-a5meknzr.googlevideo.com/videoplayback?expire=1627527185&amp;ei=scMBYd_eBN-_mLAP4ai6wAE&amp;ip=5.188.183.140&amp;id=o-AGDLmbs_7fgvDsagQMap1stOjXC9Rm6YnHrPk8fNjSsw&amp;itag=302&amp;aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C394%2C395%2C396%2C397%2C398%2C399&amp;source=youtube&amp;requiressl=yes&amp;vprv=1&amp;mime=video%2Fwebm&amp;ns=Xu0t2zrf2L3CzQ_4UXpJ-E8G&amp;gir=yes&amp;clen=2810004&amp;dur=160.150&amp;lmt=1609470969777461&amp;keepalive=yes&amp;fexp=24001373,24007246&amp;c=WEB&amp;txp=5316222&amp;n=x7LTZUZgWYI6K3N&amp;sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&amp;sig=AOq0QJ8wRQIhALL1d6nykpZ9GZxwZlnGP6c4RMEJNVqqABrcbDbmEv8IAiAI6cNwYJ2y36jvlaeq6wJGPa4IXf7Rg4MG6yiRCrR3PA%3D%3D&amp;redirect_counter=1&amp;rm=sn-h5qzk7z&amp;req_id=d4067b415042a3ee&amp;cms_redirect=yes&amp;ipbypass=yes&amp;mh=Gz&amp;mip=2600:8800:598e:4300:cc56:9245:3b51:ebf1&amp;mm=31&amp;mn=sn-a5meknzr&amp;ms=au&amp;mt=1627505087&amp;mv=m&amp;mvi=4&amp;pl=34&amp;lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&amp;lsig=AG3C_xAwRQIgWA98jgUtirTaeZDQPTh4nYgfDYmFDs6P4JGg5tmk85QCIQDC070b8d_X_8pKF92OOymfaP_9u1__juU25DJH8d8dgQ%3D%3D"
          autoPlay
          muted
          loop
        ></video>
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
