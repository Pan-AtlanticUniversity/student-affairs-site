import React from "react";
import Navbar from "../components/homeComponents/Navbar";
import Carousel from "../blogs/Carousel";
import Blog from "../components/blogComponents/Blog";
import Footer from "../components/homeComponents/Footer";
function Blogs() {
  return (
    <>
      <Navbar />
      <Carousel/>
      <div className=" min-h-screen">
        <Blog />
      </div>
      <Footer />
    </>
  );
}

export default Blogs;