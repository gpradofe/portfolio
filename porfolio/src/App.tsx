import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ClassicViewPage from "./Pages/ClassicViewPage";
import { GlobalStyles } from "./global-styles";
const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/classic-view" element={<ClassicViewPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
