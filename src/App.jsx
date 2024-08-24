
import './App.css'
// import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Homepage from './components/HOME PAGE/homepage';
import Teamspage from './components/TEAMS PAGE/Teamspage';
import Investmentpage from './components/INVESTMENT PAGE/INVESTMENTPAGE';
// import Teamspage from './components/TEAMS PAGE/Teamspage'
// import Investmentpage from './components/INVESTMENT PAGE/INVESTMENTPAGE'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<Teamspage />} />
        <Route path="/investment-criteria" element={<Investmentpage />} />
      </Routes>
    </Router>
  );
}

export default App
