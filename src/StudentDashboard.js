import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';
import ProgressBar from './ProgressBar';
import axios from 'axios';
import Navbar from './Navbar';

const StudentDashboard = () => {
  const [requestGenerated, setRequestGenerated] = useState(false);
  const [statuses, setStatuses] = useState({
    paused: false,
    hodPaused: false,
    libraryPaused: false,
    hostelPaused: false,
    messPaused: false,
    tnpPaused: false,
    accbPaused: false,
    approved: false,
    hodApproved: false,
    libraryApproved: false,
    hostelApproved: false,
    messApproved: false,
    tnpApproved: false,
    accbApproved: false,
  });
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [viewingProgress, setViewingProgress] = useState(false);
  const [isFullyApproved, setIsFullyApproved] = useState(false);
  const [, setCurrentStep] = useState(1);

  const handleGenerateRequest = async () => {
    if (requestGenerated) {
      alert('Request already generated. Please wait for approval.');
      return;
    }

    const studentId = localStorage.getItem('userId');
    const studentName = localStorage.getItem('student_name');
    const fatherName = localStorage.getItem('father_name');
    const URN = localStorage.getItem('URN');
    const CRN = localStorage.getItem('CRN');
    const department = localStorage.getItem('department');
    const requestDetails = 'Example request details';

    try {
      const response = await axios.post('/api/generate-request', {
        studentId,
        requestDetails,
        studentName,
        fatherName,
        URN,
        CRN,
        department,
      });

      console.log(response.data);
      setRequestGenerated(true);
      alert('Request generated successfully');

      // Update current step after successful request generation
      setCurrentStep(/* Update with your logic */);
    } catch (error) {
      console.error('Error generating request:', error);
      alert('Failed to generate request');
    }
  };

  const handleCheckRequestStatus = async () => {
    const studentId = localStorage.getItem('userId');
    const URN = localStorage.getItem('URN');

    try {
      const response = await axios.get(`/api/check-request-status?studentId=${studentId}&URN=${URN}`);
      const { isRequestGenerated, existingRequest } = response.data;

      setRequestGenerated(isRequestGenerated);

      // Additional check to see if the request is in the generated_requests collection
      if (existingRequest) {
        setRequestGenerated(true);
      }

      const authorityStatuses = {};
      const authorities = [
        'paused',
        'hod_paused',
        'library_paused',
        'hostel_paused',
        'mess_paused',
        'tnp_paused',
        'accb_paused',
        'approved_requests',
        'hod_approval',
        'library_approved',
        'hostel_approved',
        'mess_approved',
        'tnp_approved',
        'accb_approved',
      ];

      authorities.forEach((authority) => {
        authorityStatuses[authority] = response.data[authority] || false;
      });

      setStatuses(authorityStatuses);

      // Check if the request is fully approved
      const isFullyApproved =
        authorityStatuses.hod_approval &&
        authorityStatuses.library_approved &&
        authorityStatuses.hostel_approved &&
        authorityStatuses.mess_approved &&
        authorityStatuses.tnp_approved &&
        authorityStatuses.accb_approved;

      setIsFullyApproved(isFullyApproved);
    } catch (error) {
      console.error('Error checking request status:', error);
      alert('Failed to check request status.');
    }

    setCurrentStep(/* Update with your logic */);
  };

  useEffect(() => {
    handleCheckRequestStatus();
  }, []);

  useEffect(() => {
    const authorities = [
      'paused',
      'hod_paused',
      'library_paused',
      'hostel_paused',
      'mess_paused',
      'tnp_paused',
      'accb_paused',
      'approved_requests',
      'hod_approval',
      'library_approved',
      'hostel_approved',
      'mess_approved',
      'tnp_approved',
      'accb_approved',
    ];

    for (let i = 0; i < authorities.length; i++) {
      if (statuses[authorities[i]]) {
        setCurrentStep(i + 1);
        break;
      }
    }
  }, [statuses]);

  function handleViewProgress() {
    setShowProgressBar((prevShowProgressBar) => !prevShowProgressBar);
    setViewingProgress((prevViewingProgress) => !prevViewingProgress);
  }

  const handleGenerateCertificate = () => {
    // Logic to handle generating certificate
    // Redirect to a new page or perform any other necessary action
   
     window.location.href = '/certificate-page';
  };

  console.log('Rendering component');
  return (
    <div className={`student-dashboard${viewingProgress ? ' viewing-progress' : ''}`}>
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
              {requestGenerated ? (
                <>
                  {isFullyApproved ? (
                    <button onClick={handleGenerateCertificate}>Generate Certificate</button>
                  ) : (
                    <>
                      <button onClick={handleViewProgress}>
                        {showProgressBar ? 'Hide Progress' : 'View Progress'}
                      </button>
                      {showProgressBar && <ProgressBar statusData={statuses} />}
                    </>
                  )}
                </>
              ) : (
                <button onClick={handleGenerateRequest}>Generate Request</button>
              )}
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
