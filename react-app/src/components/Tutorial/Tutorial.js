import React from "react";
import { NavLink } from "react-router-dom";
import "./Tutorial.css";
import splashVideo from "../../resources/cardgame-login.gif";
import homeVideo from "../../resources/cardgame-home.gif";
import soloVideo from "../../resources/cardgame-solo.gif";
import multiplayer from "../../resources/Hnet-image.gif";
import logo from "../SplashPage/bjkids.png";
import NavBar from "../NavBar";

function Tutorial() {
  return (
      <div className="tutorial-container">
      <h1>Tutorial</h1>{" "}
          <p>Here we will give you a tutorial of the App and walk-through how to use it. As well
              know what to expect.
      </p>
      <div className="tutorial-one">
        <img src={splashVideo} alt="" width="500px" height="400px"></img>
        <p>When you hit the landing page you can log-in or sign-up.</p>
      </div>
      <div className="tutorial-two">
        <p>The Sign-up form should look like this...</p>
        <img
          src="https://i.ibb.co/vHzJLPL/signinform.png"
          alt=""
          width="400px"
          height="300px"
        ></img>
      </div>
      <div className="tutorial-one">
        <img
          src="https://i.ibb.co/QYT94FN/loginform.png"
          alt=""
          width="500px"
          height="400px"
        ></img>
        <p>And the Log-in form like this... </p>
      </div>
      <div className="tutorial-two">
        <p>
          Logging in or signing up will take you to the home page. <br></br>
          Here you may see the top players, as well as the ability to start a
          new game. You can either select "Single Player" or Multi Player modes.
        </p>
        <img src={homeVideo} alt="" width="400px" height="300px"></img>
      </div>
      <div className="tutorial-one">
        <img
          src="https://i.ibb.co/0Cx3j4G/Screen-Shot-2021-08-03-at-4-58-02-AM.png"
          alt=""
          width="1000px"
        ></img>
        <p>
          On top of the pages from the Home Page on-wards you get access to the
          Nav Bar where you can find your win ratio as well quick links to Home
          Page, Single and Multi Player Modes , Contact Devs, Tutorial Page and
          Option to Log Out.{" "}
        </p>
      </div>
      <div className="tutorial-two">
        <p>
          From the Home Page you can select one of the two game mode options
          single or multi player. These buttons can be found in the bottom after
          the leader board.
        </p>
        <img src={soloVideo} alt="" width="500px" height="400px"></img>{" "}
      </div>
      <div className="tutorial-one">
        <img
          src="https://i.ibb.co/ySZv38S/startnewgame.png"
          alt=""
          width="500px"
          height="400px"
        ></img>
        <p>
          When you select one of the game modes you be able to start a new game.
        </p>
      </div>
      <div className="tutorial-two">
        <p>
          The game board will look like this... if you pick single player it
          will just be you and dealer. If you pick multi-player it will look
          like this. Here you will see who is turn it is.
        </p>
        <img
          src="https://i.ibb.co/Rz6RJCB/gameboard.png"
          alt="gameboard"
          width="500px"
          height="400px"
        ></img>{" "}
      </div>
      <div className="tutorial-one">
        <img
          src="https://i.ibb.co/YbSqDGR/optionsyourturn.png"
          alt="optionsyourturn"
          width="500px"
          height="400px"
        ></img>
        <p>
          When it is your turn you have to option to "Hit" or "Stand" which is
          same as you stay with the cards you have and play it against the
          dealer.
        </p>
      </div>
      <div className="tutorial-four">
        <p>
          And lastly, In multi-player mode, you may play live with up to 4 other
          users. Remember to ready up to start a new match.
        </p>
        <img src={multiplayer} alt="" width="400px" height="300px"></img>{" "}
      </div>
    </div>
  );
}

export default Tutorial;
