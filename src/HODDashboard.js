import React from 'react';
import { Link } from 'react-router-dom';
import './HODDashboard.css';
import Navbar from './Navbar';

const HODDashboard = () => {
  return (
    <div className="hod-dashboard">
       <Navbar />

      <div className="header-container">
        <div className="wrapper">
            {/* Add the image container here */}
            <div className="image-container">
                <img src="https://www.logolynx.com/images/logolynx/9f/9f2c4042d28462d69f738e6018bb4ff9.jpeg" alt="Description" />
              </div>
          <header>
            <div className="hero-content">
              <h1>Welcome</h1>
              <Link to="/hod-pending-requests">Pending Request</Link>
              <Link to="/hod-approved-requests">Approved requests</Link>
              <Link to="/hod-paused-requests">Paused Request</Link>
            
             
            </div>
            
          </header>
        </div>
      </div>
    </div>
  );
};

export default HODDashboard;