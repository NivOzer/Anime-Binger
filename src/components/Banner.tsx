import React from "react";
import "../styles/BannerStyles.css";
interface Props {
  bannerImage: string;
  bannerText: string;
}
function Banner({ bannerImage, bannerText }: Props) {
  return (
    <div className="bannerContainer">
      <div className="bannerText">{bannerText}</div>
      <img src={bannerImage} />
    </div>
  );
}

export default Banner;
