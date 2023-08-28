import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
      </Routes>
    </Router>
  );
};

export default App;
