import React from "react";
import Banner from "./Banner";
import "../styles/HomeStyles.css";
import onePunchManLogo from "../banners/one-punch-man.jpg";
import onePieceLogo from "../banners/one-piece.png";
import attackOnTitanLogo from "../banners/attack-on-titan.jpg";
import { Link } from "react-router-dom";
import Anime from "./Anime";
function Home() {
  return (
    <div className="showsContainer">
      <Link to="/anime?animeName=OnePiece">
        <Banner bannerImage={onePieceLogo} bannerText="One Piece" />
      </Link>
      <Link to="/anime?animeName=AttackOnTitan">
        <Banner bannerImage={attackOnTitanLogo} bannerText="Attack On Titan" />
      </Link>
      <Link to="/anime?animeName=OnePunchMan">
        <Banner bannerImage={onePunchManLogo} bannerText="One Punch Man" />
      </Link>
    </div>
  );
}

export default Home;
