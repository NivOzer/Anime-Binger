import "../styles/AnimeStyles.css";
import React, { useState } from "react";
import * as OnePiece from "../ShowsInterface/OnePiece";
import * as AttackOnTitan from "../ShowsInterface/AttackOnTitan";
import { stringify } from "querystring";
import { returnDownBack } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link, useLocation } from "react-router-dom";

// interface Props {
//   animeName: string;
// }

function Anime() {
  const locationData = useLocation();
  const animeName = new URLSearchParams(locationData.search).get("animeName");
  const formattedAnimeName = animeName?.replace(/([A-Z])/g, " $1").trim();

  const [episodeNumber, setEpisodeNumber] = React.useState("");
  const [seasonNumber, setSeasonNumber] = React.useState("");

  let seasonal: boolean = false;

  const handleEpisodeNumberChange = (event: any) => {
    setEpisodeNumber(event.target.value);
  };
  const handleSeasonNumberChange = (event: any) => {
    setSeasonNumber(event.target.value);
  };

  let playEpisodeFromInput: (
    episodeNumber: number,
    seasonNumber?: number
  ) => void;

  switch (animeName) {
    case "OnePiece":
      playEpisodeFromInput = OnePiece.playEpisodeFromInput;
      break;
    case "AttackOnTitan":
      playEpisodeFromInput = AttackOnTitan.playEpisodeFromInput;
      seasonal = true;
      break;
    case "OnePunchMan":
      seasonal = true;
      break;
    default:
      playEpisodeFromInput = (
        episodeNumber: number,
        seasonNumber?: number
      ) => {};
      break;
  }

  const handlePlay = (episodeNumber: number, seasonNumber?: number) => {
    playEpisodeFromInput(episodeNumber, seasonNumber);
  };

  return (
    <div className="Anime">
      <div className="AnimeHeader">
        <h1>{formattedAnimeName}</h1>
      </div>
      <div className="AnimeContainer">
        <div className="episodeNumPlay">
          <input
            type="text"
            placeholder="Episode No."
            value={episodeNumber}
            onChange={handleEpisodeNumberChange}
          />

          {seasonal && (
            <input
              type="text"
              placeholder="Season No."
              value={seasonNumber}
              onChange={handleSeasonNumberChange}
            />
          )}

          <button
            className="playEpisode animeButton"
            onClick={() =>
              handlePlay(parseInt(episodeNumber), parseInt(seasonNumber))
            }
          >
            Play Episode
          </button>
        </div>
        <div className="nextEpisode">
          <button
            className="animeButton"
            onClick={() => {
              if (episodeNumber != "") {
                handlePlay(parseInt(episodeNumber) + 1, parseInt(seasonNumber));
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
        <IonIcon
          className="backButton"
          icon={returnDownBack}
          style={{ fontSize: "30px" }}
        />
      </Link>
    </div>
  );
}

export default Anime;
