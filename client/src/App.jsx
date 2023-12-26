import "./App.css";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}  />
          <Route path="/LogIn" element={<LogIn />}  />
          <Route path="/Register" element={<Register />}  />
          <Route path="/Profile" element={<Profile />}  />
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
