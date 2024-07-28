import React from "react";
import Navbar from "../components/homeComponents/Navbar";
import Admin from "../components/adminComponents/Admin";
import Footer from "../components/homeComponents/Footer";
function Admins() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Admin />
      </div>
      <Footer />
    </>
  );
}

export default Admins;