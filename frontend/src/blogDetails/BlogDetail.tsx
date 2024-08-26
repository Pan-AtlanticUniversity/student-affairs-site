import React from "react";
import Navbar from "../components/homeComponents/Navbar";
// import Carousel from "../clubs/Carousel.tsx";
import Blogdetail from "../components/blogComponents/BlogDetails.tsx";
import Footer from "../components/homeComponents/Footer";

function BlogDetail() {
  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      <div className=" min-h-screen">
        <Blogdetail />
      </div>

      <Footer />
    </>
  );
}

export default BlogDetail;
