import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import Home from "./Router/Home";
import About from "./Router/About";
import Contact from "./Router/Contact";
import Navbar from "./Router/Navbar";
import UserStatus from "./customHook/UserStatus";
//import { Suspense } from 'react';
//import DropDownPage from './Pages/DropDownPage';

function App() {
  const userStatus = UserStatus();
  const navigate = useNavigate();
  const target_url = "";
  const goToMainPage = () => {
    console.log("handle1");
    navigate(target_url);
    navigate(0);
  };
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      console.log("handle2");
      goToMainPage();
      console.log("handlef3");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="App">
      <div
        style={{
          color: "red",
          height: "auto",
          width: "auto",
          marginLeft: "500px",
          marginTop: "20px",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <p>React Navigation </p>
        {/* <button onClick={goToMainPage}>Back To Mainpage </button> */}
      </div>
      {/* <DropDownPage/> */}

      <div>{userStatus ? "User Is Online" : "User Is Offline"}</div>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
