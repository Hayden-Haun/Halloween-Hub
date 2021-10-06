import React from "react";
import "./style.css";

function BannerHome() {
  return (
    <>
      <div className="bannerBackground"></div>
      <div className="columns is-gapless">
        <div className="column boxGrid has-background-dark">Box1</div>
        <div className="column boxGrid boxImage1">Box2</div>
      </div>
      <div className="columns is-gapless">
        <div className="column boxGrid boxImage2">Box3</div>
        <div className="column boxGrid has-background-dark">Box4</div>
      </div>
    </>
  );
}

export default BannerHome;
