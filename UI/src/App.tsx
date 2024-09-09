import { Routes, Route } from 'react-router-dom';
import { About, Admins, BlogDetail, Blogs, ClubDetail, Clubs, ForgotPassword, Home, Login, Register, Rules } from "./pages"

function App() {

  return (

    /*
    wrap later for auth
    <AuthProvider>

    */
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />

      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/clubs"
        element={<Clubs />
        }
      />
      <Route
        path="/clubs/:_id"
        element={<ClubDetail />}
      />
      <Route
        path="/blogs"
        element={<Blogs />}
      />

      <Route
        path="/blogs/:_id"
        element={<BlogDetail />}
      />
      <Route
        path="/rules"
        element={<Rules />}
      />
      <Route
        path="/admin"
        element={<Admins />}
      />
    </Routes>
  )
}

export default App
