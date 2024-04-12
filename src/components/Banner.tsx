import React from "react";
interface Props {
  bannerImage: string;
}
function Banner({ bannerImage }: Props) {
  return (
    <div>
      <h2>Text</h2>
      <img src={bannerImage} />
    </div>
  );
}

export default Banner;
