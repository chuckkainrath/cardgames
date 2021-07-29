import React, { useEffect } from "react";
import "../../../src/index.css";
import { useSelector, useDispatch } from "react-redux";
import "./LeaderBoard.css"

function LeaderBoard() {
  return (
    <div id='leader' className="container p-4 mt-9 inline-block ">
     
      <div className="outter-border">
        <div className="inner-border">
          <h1 className="h1-board m-4 font-black text-3xl justify-center flex">
        Leader Board
      </h1>
          <table className="text-left w-full">
            <thead className="bg-black flex text-white w-full">
              <tr className="flex w-full mb-4">
                <th className="p-4 w-1/4">User Name</th>
                <th className="p-4 w-1/4">Wins</th>
                <th className="p-4 w-1/4">Lost</th>
                <th className="p-4 w-1/4">Win Ratio %</th>
              </tr>
            </thead>
            <tbody
              className="bg-green flex flex-col items-center justify-between overflow-y-auto w-full"
              style={{ height: "50vh" }}
            >
              <tr className="first-place bg-yellow-400 flex w-full">
                <td className="p-4 w-1/4">Dogs</td>
                <td className="p-4 w-1/4">Cats</td>
                <td className="p-4 w-1/4">Birds</td>
                <td className="p-4 w-1/4">Fish</td>
              </tr>
              <tr className="second-place bg-gray-400 flex w-full">
                <td className="p-4 w-1/4">Dogs</td>
                <td className="p-4 w-1/4">Cats</td>
                <td className="p-4 w-1/4">Birds</td>
                <td className="p-4 w-1/4">Fish</td>
              </tr>
              <tr className="third-place bg-yellow-700 flex w-full ">
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
