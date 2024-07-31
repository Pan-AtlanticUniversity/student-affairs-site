import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { BrowserRouter } from "react-router-dom";
// import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </BrowserRouter>
)





// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <AuthProvider>
//       <div className="dark:bg-slate-900 dark:text-white">
//         <App />
//       </div>
//     </AuthProvider>
//   </BrowserRouter>
// );
