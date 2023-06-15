import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { AuthProvider } from "./contexts/auth";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Dreamlist from "./pages/Dreamlist";
import Dream from "./pages/Dream";
import NewDream from "./pages/NewDream";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dreamlist" element={<Dreamlist />} />
          <Route path="/dream" element={<Dream />} />
          <Route path="/newdream" element={<NewDream />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;