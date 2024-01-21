import React from 'react';
import { Link } from 'react-router-dom';
import './LibraryDashboard.css';
import Navbar from './Navbar';

const LibraryDashboard = () => {
  return (
    <div className="library-dashboard">
      <Navbar />

      <div className="header-container">
        <div className="wrapper">
            {/* Add the image container here */}
            <div className="image-container">
                <img src="https://www.logolynx.com/images/logolynx/9f/9f2c4042d28462d69f738e6018bb4ff9.jpeg" alt="Description" />
              </div>
          <header>
            <div className="hero-content">
              <h1>Welcome,</h1>
              <Link to="/dpt-ce?department=CE">CE</Link>
              <Link to="/dpt-ee?department=EE">EE</Link>
              <Link to="/dpt-me-pro?department=ME&PRO">ME & PRO</Link>
              <Link to="/dpt-ece?department=ECE">ECE</Link>
              <Link to="/dpt-cse?department=CSE">CSE</Link>
              <Link to="/dpt-it?department=IT">IT</Link> {/* Add department as query parameter */}
              <Link to="/dpt-mba?department=MBA">MBA</Link>
              <Link to="/dpt-bca?department=BCA">BCA</Link>
            </div>
           
          </header>
        </div>
      </div>
    </div>
  );
};

export default LibraryDashboard;
