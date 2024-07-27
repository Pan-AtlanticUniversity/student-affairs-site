import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from './home/Home';
import Clubs from './clubs/Clubs.tsx';
import Blogs from './blogs/Blogs';


function App() {


  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      {/* route to the home page */}
      <Route path="/" element={<Home />} />
      <Route path="/club" element = {<Clubs/>}></Route>
      <Route path="/blog" element = {<Blogs/>}></Route>

    </Routes>
    </div>
      
    </>
  )
}

export default App
