import React from "react";
import Banner from "./Banner";
import "../styles/HomeStyles.css";
import onePunchManLogo from "../banners/one-punch-man.jpg";
import onePieceLogo from "../banners/one-piece.png";
import attackOnTitanLogo from "../banners/attack-on-titan.jpg";

function Home() {
  return (
    <div className="showsContainer">
      <Banner bannerImage={onePieceLogo} bannerText="One Piece" />
      <Banner bannerImage={attackOnTitanLogo} bannerText="Attack On Titan" />
      <Banner bannerImage={onePunchManLogo} bannerText="One Punch Man" />
    </div>
  );
}

export default Home;
