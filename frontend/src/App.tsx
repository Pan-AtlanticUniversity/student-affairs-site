import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from './home/Home';
import Clubs from './clubs/Clubs.tsx';
import Blogs from './blogs/Blogs';
import Admins from './admins/Admins.tsx';
// import ClubDetails from './components/clubComponents/ClubDetails.tsx';
import ClubDetails from './clubDetails/ClubDetail.tsx';
import BlogDetails from './blogDetails/BlogDetail';

function App() {

 

  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>

      {/* route to the home page */}
      <Route path="/" element={<Home />} />
      <Route path="/club" element = {<Clubs/>}></Route>
      <Route path="/club/:_id" element={<ClubDetails/>} />
      <Route path="/blog" element = {<Blogs/>}></Route>
      <Route path="/blog/:_id" element={<BlogDetails/>} />
      <Route path="/admin" element = {<Admins/>}></Route>
      

    </Routes>
    </div>
      
    </>
  )
}

export default App
