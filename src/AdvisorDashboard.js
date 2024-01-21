import React from 'react';
import { Link } from 'react-router-dom';
import './AdvisorDashboard.css';
import Navbar from './Navbar';

const AdvisorDashboard = () => {
  return (
    <div className="advisor-dashboard">
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
              <Link to="/pending-requests">Pending Request</Link>
              <a href="/approved-requests">Approved requests</a>
              <a href="/paused-requests">Paused Request</a>
             
            </div>
            
          </header>
        </div>
      </div>
    </div>
  );
};

export default AdvisorDashboard;