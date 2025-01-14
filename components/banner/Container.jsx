import React from "react";
import Caption from "./Caption";
import BannerImg from "./BannerImg";

function Container() {
  return (
    <div className="md:grid md:grid-cols-2 gap-1">
      <Caption />
      <BannerImg />
    </div>
  );
}

export default Container;
