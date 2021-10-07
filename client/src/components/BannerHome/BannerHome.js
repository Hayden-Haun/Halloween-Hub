import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function BannerHome() {
  return (
    <>
      <div className="bannerBackground my-0 py-0"></div>
      <div className="columns is-gapless my-0 py-0">
        <div className="column boxGrid has-background-dark">
          <button className="is-light button">
            <Link to="/products">See all products</Link>
          </button>
        </div>
        <div className="column boxGrid boxImage1">Box2</div>
      </div>
      <div className="columns is-gapless my-0 py-0">
        <div className="column boxGrid boxImage2">Box3</div>
        <div className="column boxGrid has-background-dark">Box4</div>
      </div>
    </>
  );
}

export default BannerHome;
