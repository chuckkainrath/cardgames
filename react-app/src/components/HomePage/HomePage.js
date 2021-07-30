import React from "react";
import { useHistory } from "react-router-dom";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import "./HomePage.css";

function HomePage() {
  const history = useHistory();

  return (
    <div className="home-page-container">
      <video autoplay muted loop id="myVideo">
        <source
          src="/Users/tristansanjuan/Desktop/AppAcademy/Projects/cardgames/react-app/src/resources/poker.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
      <div className="home-page-overlay"></div>
      <div className="home-page-elements">
        <LeaderBoard />
        <div className="button-divs">
          <div className="single-div">
            <button
              className="single-button"
              onClick={() => history.push("/single-player")}
            >
              Single Player
            </button>
          </div>
          <div className="single-div">
            <button
              className="multi-button"
              onClick={() => history.push("/multi-player")}
            >
              Multi-Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
