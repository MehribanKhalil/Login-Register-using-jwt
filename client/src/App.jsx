import "./App.css";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import PrivateRoute from "./router/PrivateRoute";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />

          <Route element={<PrivateRoute role={["user", "admin"]} />}>
            <Route path="/Profile" element={<Profile />} />
          </Route>

          <Route element={<PrivateRoute role={["admin"]} />}>
            <Route path="/Admin" element={<AdminPanel />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
