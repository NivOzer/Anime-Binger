import "./AnimeStyles.css";
import React, { useState } from "react";
function Anime() {
  const [episodeNumber, setEpisodeNumber] = React.useState("");
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
            onChange={(event) => {
              setEpisodeNumber(event.target.value);
            }}
          />
          <button className="playEpisode animeButton">Play Episode</button>
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
