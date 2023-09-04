import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ClassicViewPage from "./Pages/ClassicViewPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/classic-view" Component={ClassicViewPage} />
      </Routes>
    </Router>
  );
};

export default App;
