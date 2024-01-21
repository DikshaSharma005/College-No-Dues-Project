import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import './LibraryApprovedRequests.css';

const LibraryApprovedRequests = () => {
  const [approvedRequests, setApprovedRequests] = useState([]); // Define and initialize approvedRequests state variable
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const department = queryParams.get('department');

  useEffect(() => {
    if (department) {
    axios
    .get(`http://localhost:3001/api/library-approved-requests?department=${department}`)
      .then((response) => {
        setApprovedRequests(response.data); // Update approvedRequests, not setRequests
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
}, [department]);

  return (
    <div className="approved-requests">
       {/* Add the image container here */}
       <div className="image">
                <img src="https://www.logolynx.com/images/logolynx/9f/9f2c4042d28462d69f738e6018bb4ff9.jpeg" alt="Description" />
              </div>
      <Navbar />
      <h1><b>Approved Requests</b></h1>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>URN</th>
            <th>CRN</th>
            <th>Department</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {approvedRequests.map((request) => (
            <tr key={request._id}>
              <td>{request.studentName}</td>
              <td>{request.fatherName}</td>
              <td>{request.URN}</td>
              <td>{request.CRN}</td>
              <td>{request.department}</td>
              <td>{new Date(request.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryApprovedRequests;
