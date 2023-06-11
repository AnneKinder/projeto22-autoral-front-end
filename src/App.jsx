import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { AuthProvider } from "./contexts/auth";
import Signin from "./pages/Signin";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;