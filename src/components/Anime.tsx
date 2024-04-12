import "../styles/AnimeStyles.css";
import React, { useState } from "react";
import {
  fillerChecker,
  playEpisodeFromInput,
  playEpisode,
} from "../ShowsInterface/OnePiece";
import { stringify } from "querystring";
import { returnDownBack } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
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
          <button
            className="animeButton"
            onClick={() => {
              if (episodeNumber != "") {
                handlePlay(parseInt(episodeNumber) + 1);
                setEpisodeNumber((parseInt(episodeNumber) + 1).toString());
              }
            }}
          >
            Next Episode
          </button>
        </div>
      </div>
      <p>
        Last Episode Watched:&nbsp;
        <span className="lastWatched">{episodeNumber}</span>
      </p>
      <Link to="/" style={{ color: "black" }}>
        <IonIcon icon={returnDownBack} style={{ fontSize: "30px" }} />
      </Link>
    </div>
  );
}

export default Anime;
