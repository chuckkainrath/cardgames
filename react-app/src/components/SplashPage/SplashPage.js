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
          src="https://r4---sn-a5meknzr.googlevideo.com/videoplayback?expire=1627476073&ei=CfwAYZmhMse_W5a2nogK&ip=5.188.183.140&id=o-ADIfezxsh-IgP6oIfr5yCjq-B4IBR49QPgDeAz6cm4iN&itag=22&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=WoYfjG0P7bSRU6TVYiRqcWoG&ratebypass=yes&dur=160.217&lmt=1609470554531715&fexp=24001373,24007246&c=WEB&txp=5311224&n=IGzkYD_DojD6Z1e&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgJt2Mh9EJChhPg4aroXlMpMp84gWApEj91gIH4CDWwoYCIErlGDIaPKTH_fzTXyAOCU4RnFCX26duIN6mwEvKRo01&redirect_counter=1&cm2rm=sn-h5qzk7z&req_id=908f4efa5bb0a3ee&cms_redirect=yes&mh=Gz&mip=2600:8800:598e:4300:e5e8:588:13a8:60ec&mm=34&mn=sn-a5meknzr&ms=ltu&mt=1627455153&mv=m&mvi=4&pl=34&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAKSZDY_9UCbHaXPoYm2k4yPwUxGTp69P67rGbdCoctJAAiAunjIYR54eVI00FQiIg-qOho_9wKT0Jxf7J3H5z0cFYw%3D%3D"
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
            wrong answer. <br></br> Do you take a card, increase your bet, bet big or bet
            small. <br></br>There's absolutely a right and wrong answer.
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
