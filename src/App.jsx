// import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Headers/Headers"
import Home from "./pages/Home/Home"
import Edit from "./pages/Edit/Edit"
import Profile from "./pages/Profile/Profile"
import Register from "./pages/Register/Register"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/edit/:id" element={<Edit />} />{" "}
        <Route path="/userprofile/:id" element={<Profile />} />{" "}
        <Route path="/register" element={<Register />} />{" "}
      </Routes>{" "}
    </>
  )
}

export default App
