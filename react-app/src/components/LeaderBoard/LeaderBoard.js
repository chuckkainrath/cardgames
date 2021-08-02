import React, { useEffect, useState } from "react";
import "../../../src/index.css";
import { useSelector, useDispatch } from "react-redux";
import "./LeaderBoard.css"

function LeaderBoard() {
  const [topPlayers, setTopPlayers] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetch('/api/users/leaderboard');
      const data = await result.json();
      console.log(data);
      setTopPlayers(data.topPlayers);
    })();
  }, []);

  return (
    <div id="leader" className="container p-4 mt-9 inline-block ">
      <div class="gradient-border">
      </div>
      <div className="outter-border">
        <div className="inner-border">
          <h1 className="h1-board m-4 font-black text-3xl justify-center flex">
            ♥️♠️ Leader Board ♣️♦️
          </h1>
          <table className="text-left w-full">
            <thead className="bg-black flex text-white w-full mb-3">
              <tr className="flex w-full mb-4">
                <th className="p-4 w-1/4">Player</th>
                <th className="p-4 w-1/4">Wins</th>
                <th className="p-4 w-1/4">Losses</th>
                <th className="p-4 w-1/4">Win %</th>
              </tr>
            </thead>
            <tbody
              className="leaderboard bg-green flex flex-col items-center justify-between overflow-y-auto w-full"
              style={{ height: "50vh" }}
            >
              {topPlayers && topPlayers.map(player => {
              return (
                <tr key={player.id} className="flex w-full">
                  <td className="p-4 w-1/4">{player.username}</td>
                  <td className="p-4 w-1/4">{player.wins}</td>
                  <td className="p-4 w-1/4">{player.losses}</td>
                  <td className="p-4 w-1/4">{(player.ratio * 100).toFixed(2)}%</td>
                </tr>
              )
              })}
              {/* <tr className="first-place bg-yellow-400 flex w-full">
                <td className="p-4 w-1/4">Powerbottom88</td>
                <td className="p-4 w-1/4">100</td>
                <td className="p-4 w-1/4">2</td>
                <td className="p-4 w-1/4">Fish</td>
              </tr>
              <tr className="second-place bg-gray-300 flex w-full">
                <td className="p-4 w-1/4">Dogs</td>
                <td className="p-4 w-1/4">Cats</td>
                <td className="p-4 w-1/4">Birds</td>
                <td className="p-4 w-1/4">Fish</td>
              </tr>
              <tr className="third-place bg-yellow-600 flex w-full ">
                <td className="p-4 w-1/4">Dogs</td>
                <td className="p-4 w-1/4">Cats</td>
                <td className="p-4 w-1/4">Birds</td>
                <td className="p-4 w-1/4">Fish</td>
              </tr>
              <tr className="flex w-full mb-4">
                <td className="p-4 w-1/4">Dogs</td>
                <td className="p-4 w-1/4">Cats</td>
                <td className="p-4 w-1/4">Birds</td>
                <td className="p-4 w-1/4">Fish</td>
              </tr>
              <tr className="flex w-full mb-4">
                <td className="p-4 w-1/4">Dogs</td>
                <td className="p-4 w-1/4">Cats</td>
                <td className="p-4 w-1/4">Birds</td>
                <td className="p-4 w-1/4">Fish</td>
              </tr>
              <tr className="flex w-full mb-4">
                <td className="p-4 w-1/4">Dogs</td>
                <td className="p-4 w-1/4">Cats</td>
                <td className="p-4 w-1/4">Birds</td>
                <td className="p-4 w-1/4">Fish</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
