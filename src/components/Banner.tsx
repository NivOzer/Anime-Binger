import React from "react";
import "../styles/BannerStyles.css";
interface Props {
  bannerImage: string;
}
function Banner({ bannerImage }: Props) {
  return (
    <div className="bannerContainer">
      <div>
        <h2>Text</h2>
      </div>
      <img src={bannerImage} />
    </div>
  );
}

export default Banner;
