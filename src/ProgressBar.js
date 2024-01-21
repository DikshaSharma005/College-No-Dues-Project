import React from 'react';
import './ProgressBar.css'; // Include your CSS for styling

const ProgressBar = ({ statusData }) => {
  const blocks = [
    { name: 'Advisor', approveKey: 'approved_requests', pauseKey: 'paused' },
    { name: 'HOD', approveKey: 'hod_approval', pauseKey: 'hod_paused' },
    { name: 'Library', approveKey: 'library_approved', pauseKey: 'library_paused' }, 
    { name: 'Hostel', approveKey: 'hostel_approved', pauseKey: 'hostel_paused' },
    { name: 'Mess', approveKey: 'mess_approved', pauseKey: 'mess_paused' },
    { name: 'TNP', approveKey: 'tnp_approved', pauseKey: 'tnp_paused' },
    { name: 'Accounts', approveKey: 'accb_approved', pauseKey: 'accb_paused' },
  
  ];

  return (
    <div className="progress-bar">
      {blocks.map((block, index) => (
        <div
          key={index}
          className={`progress-block ${statusData[block.approveKey] ? 'approved' : statusData[block.pauseKey] ? 'paused' : ''}`}
        >
          {block.name}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;

  

  