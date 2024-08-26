import React from "react";
import Navbar from "../components/homeComponents/Navbar";
// import Carousel from "../clubs/Carousel.tsx";
import Clubdetail from "../components/clubComponents/ClubDetails.tsx";
import Footer from "../components/homeComponents/Footer";

function ClubDetail() {
  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      <div className=" min-h-screen">
        <Clubdetail />
      </div>

      <Footer />
    </>
  );
}

export default ClubDetail;
