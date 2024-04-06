import "./AnimeStyles.css";
import React, { useState } from "react";
import { fillerChecker, playEpisodeFromInput, playEpisode } from "./OnePiece";
function Anime() {
  const [episodeNumber, setEpisodeNumber] = React.useState("");
  const handleNumberChange = (event: any) => {
    setEpisodeNumber(event.target.value);
  };
  const handlePlay = (episodeNumber: number) => {
    playEpisodeFromInput(episodeNumber);
  };
  return (
    <div>
      <div className="AnimeHeader">
        <h1>anime binger</h1>
      </div>
      <div className="AnimeContainer">
        <div className="episodeNumPlay">
          <input
            type="text"
            placeholder="Episode Number"
            value={episodeNumber}
            onChange={handleNumberChange}
          />
          <button
            className="playEpisode animeButton"
            onClick={() => handlePlay(parseInt(episodeNumber))}
          >
            Play Episode
          </button>
        </div>
        <div className="nextEpisode">
          <button className="animeButton">Next Episode</button>
        </div>
      </div>
      <p>
        Last Episode Watched:&nbsp;
        <span className="lastWatched">{episodeNumber}</span>
      </p>
    </div>
  );
}

export default Anime;
