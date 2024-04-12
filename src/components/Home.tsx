import React from "react";
import Banner from "./Banner";
import onePunchManLogo from "../banners/one-punch-man.jpg";
import onePieceLogo from "../banners/one-piece.png";
import attackOnTitanLogo from "../banners/attack-on-titan.jpg";

function Home() {
  return (
    <div>
      <Banner bannerImage={attackOnTitanLogo} />
    </div>
  );
}

export default Home;
