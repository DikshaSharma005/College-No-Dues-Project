import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MessDashboardDpt.css';
import Navbar from './Navbar';

const MessDashboardDpt = () => {
  const location = useLocation();
  const department = new URLSearchParams(location.search).get('department');

  return (
    <div className="mess-dashboard-dpt">
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
              <Link to={`/mess-req-pending?department=${department}`}>Pending Request</Link>
              <Link to={`/mess-req-approved?department=${department}`}>Approved Request</Link>
              <Link to={`/mess-req-paused?department=${department}`}>Paused Request</Link>
  
             
            </div>
           
          </header>
        </div>
      </div>
    </div>
  );
};

export default MessDashboardDpt;
