import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AdvisorDashboard from './AdvisorDashboard';
import StudentDashboard from './StudentDashboard';
import LibraryDashboard from './LibraryDashboard';
import LoginPage from './LoginPage';
import PendingRequests from './PendingRequests'; 
import ApprovedRequests from './ApprovedRequests';
import PausedRequests from './PausedRequests';
import HODDashboard from './HODDashboard';
import HODpendingrequests from './HODpendingrequests';
import HODApprovedRequests from './HODApprovedRequests';
import HODPausedRequests from './HODPausedRequests';
import LibraryDashboardDpt from './LibraryDashboardDpt';
import LibraryPendingRequests from './LibraryPendingRequests';
import LibraryApprovedRequests from './LibraryApprovedRequests';
import LibraryPausedRequests from './LibraryPausedRequests';
import HostelDashboard from './HostelDashboard';
import HostelDashboardDpt from './HostelDashboardDpt';
import HostelPendingRequests from './HostelPendingRequests';
import HostelApprovedRequests from './HostelApprovedRequests';
import HostelPausedRequests from './HostelPausedRequests';
import MessDashboard from './MessDashboard';
import MessDashboardDpt from './MessDashboardDpt';
import MessPendingRequests from './MessPendingRequests';
import MessApprovedRequests from './MessApprovedRequests';
import MessPausedRequests from './MessPausedRequests';
import TNPDashboard from './TNPDashboard';
import TNPDashboardDpt from './TNPDashboardDpt';
import TNPPendingRequests from './TNPPendingRequests';
import TNPApprovedRequests from './TNPApprovedRequests';
import TNPPausedRequests from './TNPPausedRequests';
import AccbDashboard from './AccbDashboard';
import AccbDashboardDpt from './AccbDashboardDpt';
import AccbPendingRequests from './AccbPendingRequests';
import AccbApprovedRequests from './AccbApprovedRequests';
import AccbPausedRequests from './AccbPausedRequests';
import ProgressBar from './ProgressBar';
import CertificatePage from './CertificatePage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/advisor-dashboard" element={<AdvisorDashboard />} />
          <Route path="/hod-dashboard" element={<HODDashboard/>} />
          <Route path="/library-dashboard" element={<LibraryDashboard />} />
          <Route path="/hostel-dashboard" element={<HostelDashboard />} />
          <Route path="/mess-dashboard" element={<MessDashboard />} />
          <Route path="/tnp-dashboard" element={<TNPDashboard />} />
          <Route path="/accb-dashboard" element={<AccbDashboard/>} />
          <Route path="/pending-requests" element={<PendingRequests />} />
          <Route path="/approved-requests" element={<ApprovedRequests />} />
          <Route path="/paused-requests" element={<PausedRequests />} />
          <Route path="/hod-pending-requests" element={<HODpendingrequests/>} />
          <Route path="/hod-approved-requests" element={<HODApprovedRequests/>} />
          <Route path="/hod-paused-requests" element={<HODPausedRequests/>} />
          <Route path="/dpt-ce" element={<LibraryDashboardDpt />} />
          <Route path="/dpt-ee" element={<LibraryDashboardDpt />} />
          <Route path="/dpt-me-pro" element={<LibraryDashboardDpt />} />
          <Route path="/dpt-ece" element={<LibraryDashboardDpt />} />
          <Route path="/dpt-it" element={<LibraryDashboardDpt />} />
          <Route path="/dpt-mba" element={<LibraryDashboardDpt />} />
          <Route path="/dpt-bca" element={<LibraryDashboardDpt />} />
          <Route path="/lb-req-pending" element={<LibraryPendingRequests />} /> 
          <Route path="/lb-req-approved" element={<LibraryApprovedRequests />} />
          <Route path="/lb-req-paused" element={<LibraryPausedRequests />} />
          <Route path="/dp-ce" element={<HostelDashboardDpt />} />
          <Route path="/dp-ee" element={<HostelDashboardDpt />} />
          <Route path="/dp-me-pro" element={<HostelDashboardDpt />} />
          <Route path="/dp-ece" element={<HostelDashboardDpt />} />
          <Route path="/dp-it" element={<HostelDashboardDpt />} />
          <Route path="/dp-mba" element={<HostelDashboardDpt />} />
          <Route path="/dp-bca" element={<HostelDashboardDpt />} />
          <Route path="/hostel-req-pending" element={<HostelPendingRequests />} /> 
          <Route path="/hostel-req-approved" element={<HostelApprovedRequests />} />
          <Route path="/hostel-req-paused" element={<HostelPausedRequests />} />
          <Route path="/dept-ce" element={<MessDashboardDpt />} />
          <Route path="/dept-ee" element={<MessDashboardDpt />} />
          <Route path="/dept-me-pro" element={<MessDashboardDpt />} />
          <Route path="/dept-ece" element={<MessDashboardDpt />} />
          <Route path="/dept-it" element={<MessDashboardDpt />} />
          <Route path="/dept-mba" element={<MessDashboardDpt />} />
          <Route path="/dept-bca" element={<MessDashboardDpt />} />
          <Route path="/mess-req-pending" element={<MessPendingRequests />} /> 
          <Route path="/mess-req-approved" element={<MessApprovedRequests />} />
          <Route path="/mess-req-paused" element={<MessPausedRequests />} />
          <Route path="/dpmt-ce" element={<TNPDashboardDpt />} />
          <Route path="/dpmt-ee" element={<TNPDashboardDpt />} />
          <Route path="/dpmt-me-pro" element={<TNPDashboardDpt />} />
          <Route path="/dpmt-ece" element={<TNPDashboardDpt />} />
          <Route path="/dpmt-it" element={<TNPDashboardDpt />} />
          <Route path="/dpmt-mba" element={<TNPDashboardDpt />} />
          <Route path="/dpmt-bca" element={<TNPDashboardDpt />} />
          <Route path="/tnp-req-pending" element={<TNPPendingRequests />} /> 
          <Route path="/tnp-req-approved" element={<TNPApprovedRequests />} />
          <Route path="/tnp-req-paused" element={<TNPPausedRequests />} />
          <Route path="/dpnt-ce" element={<AccbDashboardDpt />} />
          <Route path="/dpnt-ee" element={<AccbDashboardDpt />} />
          <Route path="/dpnt-me-pro" element={<AccbDashboardDpt />} />
          <Route path="/dpnt-ece" element={<AccbDashboardDpt />} />
          <Route path="/dpnt-it" element={<AccbDashboardDpt />} />
          <Route path="/dpnt-mba" element={<AccbDashboardDpt />} />
          <Route path="/dpnt-bca" element={<AccbDashboardDpt />} />
          <Route path="/accb-req-pending" element={<AccbPendingRequests />} /> 
          <Route path="/accb-req-approved" element={<AccbApprovedRequests />} />
          <Route path="/accb-req-paused" element={<AccbPausedRequests />} />
          <Route path="/progress-bar" element={<ProgressBar />} />
          <Route path="/certificate-page" element={<CertificatePage />} />
          
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;