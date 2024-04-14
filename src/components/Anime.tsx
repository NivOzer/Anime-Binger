import "../styles/AnimeStyles.css";
import React, { useState, useEffect } from "react";
import * as OnePiece from "../ShowsInterface/OnePiece";
import * as AttackOnTitan from "../ShowsInterface/AttackOnTitan";
import * as OnePunchMan from "../ShowsInterface/OnePunchMan";
import { stringify } from "querystring";
import { returnDownBack } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link, useLocation } from "react-router-dom";
import { average, prominent } from "color.js";
import onePunchManLogo from "../banners/one-punch-man.jpg";
import onePieceLogo from "../banners/one-piece.png";
import attackOnTitanLogo from "../banners/attack-on-titan.jpg";

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

  const [episodeNumberColor, setEpisodeNumberColor] = React.useState("");
  const [playEpisodeColor, setPlayEpisodeColor] = React.useState("");
  const [nextEpisodeColor, setNextEpisodeColor] = React.useState("");
  const [episodeNumberButtonColor, setEpisodeNumberButtonColor] =
    React.useState("");
  const [playEpisodeButtonColor, setPlayEpisodeButtonColor] =
    React.useState("");
  const [nextEpisodeButtonColor, setNextEpisodeButtonColor] =
    React.useState("");

  const imageElement = new Image();
  // Once the image is loaded, extract the prominent colors
  useEffect(() => {
    // Once the image is loaded, extract the prominent colors
    imageElement.onload = () => {
      prominent(imageElement).then((colors) => {
        // Process the extracted colors here
        // Extracting the colors from colors array of triplets
        setEpisodeNumberColor(`rgb(${colors[0].toString()})`);
        setPlayEpisodeColor(`rgb(${colors[1].toString()})`);
        setNextEpisodeColor(`rgb(${colors[2].toString()})`);
      });
    };
  }, []);

  switch (animeName) {
    case "OnePiece":
      playEpisodeFromInput = OnePiece.playEpisodeFromInput;
      imageElement.src = onePieceLogo;
      break;
    case "AttackOnTitan":
      playEpisodeFromInput = AttackOnTitan.playEpisodeFromInput;
      seasonal = true;
      imageElement.src = attackOnTitanLogo;
      break;
    case "OnePunchMan":
      playEpisodeFromInput = OnePunchMan.playEpisodeFromInput;
      imageElement.src = onePunchManLogo;
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
            style={{
              backgroundColor: episodeNumberColor,
            }}
            type="text"
            placeholder="Episode"
            value={episodeNumber}
            onChange={handleEpisodeNumberChange}
          />

          {seasonal && (
            <input
              style={{
                backgroundColor: episodeNumberColor,
                width: "70%",
              }}
              type="text"
              placeholder="Season"
              value={seasonNumber}
              onChange={handleSeasonNumberChange}
            />
          )}

          <button
            className="playEpisode animeButton"
            style={{ backgroundColor: playEpisodeColor }}
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
            style={{ backgroundColor: nextEpisodeColor }}
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
