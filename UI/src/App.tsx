import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Admins, Blogs, Clubs, Home, Login, Register, Rules } from "./pages"



function App() {

  return (
    <Router>
      <Routes>
        {/* route to the home page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clubs" element={<Clubs />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/rules" element={<Rules />}></Route>
        <Route path="/admin" element={<Admins />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
      </Routes>

    </Router>

  )
}

export default App
