import React from "react";
import Navbar from "../components/homeComponents/Navbar";
import Carousel from "../clubs/Carousel.tsx";
import Club from "../components/clubComponents/Club.tsx";
import Footer from "../components/homeComponents/Footer";
function Clubs() {
  return (
    <>
      <Navbar />
      <Carousel/>
      <div className=" min-h-screen">
        <Club />
      </div>
      <Footer />
    </>
  );
}

export default Clubs;
