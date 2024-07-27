import React from "react";
import Navbar from "../components/homeComponents/Navbar";
import Blog from "../components/blogComponents/Blog";
import Footer from "../components/homeComponents/Footer";
function Blogs() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Blog />
      </div>
      <Footer />
    </>
  );
}

export default Blogs;