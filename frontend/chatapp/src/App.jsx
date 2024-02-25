import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
