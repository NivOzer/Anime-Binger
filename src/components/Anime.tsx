import "./AnimeStyles.css";
import React from "react";
function Anime() {
  return (
    <div>
      <div className="AnimeHeader">
        <h1>anime binger</h1>
      </div>
      <div className="AnimeContainer">
        <div className="episodeNumPlay">
          <input type="text" placeholder="Episode Number" />
          <button className="playEpisode animeButton">Play Episode</button>
        </div>
        <div className="nextEpisode">
          <button className="animeButton">Next Episode</button>
        </div>
      </div>
      <p>
        Last Episode Watched:
        <span className="lastWatched"></span>
      </p>
    </div>
  );
}

export default Anime;
