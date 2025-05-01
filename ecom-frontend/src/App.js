import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'; // Import Home.js
import Login from './components/login'; // Import Login.js
import Register from './components/register'; // Import Register.js
import About from './components/About'; // Import About.js

function App() {
  return (
    <Router>
      <div className="doctor-list-container"> {/* Apply the class here */}
        <Header /> {/* Display Header on all pages */}
        <Routes>
          {/* Define Routes for different pages */}
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/register" element={<Register />} /> {/* Register page */}
          <Route path="/about" element={<About />} /> {/* About page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
