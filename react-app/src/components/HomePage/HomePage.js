import React from "react";
import { useHistory } from "react-router-dom";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import "./HomePage.css";
import {useSelector} from "react-redux"

function HomePage() {
  const history = useHistory();
  const user = (state => state.session.user)

  if (!user) {
    history.push('/')
  }

  return (
    <div className="home-page-container">
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
