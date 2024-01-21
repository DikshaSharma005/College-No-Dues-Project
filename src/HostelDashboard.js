import React from 'react';
import { Link } from 'react-router-dom';
import './HostelDashboard.css';
import Navbar from './Navbar';

const HostelDashboard = () => {
  return (
    <div className="hostel-dashboard">
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
              <Link to="/dp-ce?department=CE">CE</Link>
              <Link to="/dp-ee?department=EE">EE</Link>
              <Link to="/dp-me-pro?department=ME&PRO">ME & PRO</Link>
              <Link to="/dp-ece?department=ECE">ECE</Link>
              <Link to="/dp-cse?department=CSE">CSE</Link>
              <Link to="/dp-it?department=IT">IT</Link> {/* Add department as query parameter */}
              <Link to="/dp-mba?department=MBA">MBA</Link>
              <Link to="/dp-bca?department=BCA">BCA</Link>
            </div>
            <div className="photo-bg"></div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default HostelDashboard;
