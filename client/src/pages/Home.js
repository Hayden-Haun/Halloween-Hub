import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import BannerHome from "../components/BannerHome/BannerHome";

const Home = () => {
  return (
    <>
      {/* <div className="container"> */}
      <BannerHome />
      <ProductList />
      <Cart />
      {/* </div> */}
    </>
  );
};

export default Home;
