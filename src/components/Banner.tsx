import React from "react";

function Banner({ imagePath }: { imagePath: string }) {
  const imgSrc = `./banners/${imagePath}`;
  console.log(imgSrc);
  return (
    <div>
      <h2>Text</h2>
      <img
        src={
          "https://cdn.oneesports.gg/cdn-data/2023/09/Anime_OnePiece_MonkeyDLuffy_Wallpaper_Smiling_HD.jpg"
        }
      />
    </div>
  );
}

export default Banner;
