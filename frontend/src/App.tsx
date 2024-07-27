import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from './home/Home';


function App() {


  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      {/* route to the home page */}
      <Route path="/" element={<Home />} />

    </Routes>
    </div>
      
    </>
  )
}

export default App
