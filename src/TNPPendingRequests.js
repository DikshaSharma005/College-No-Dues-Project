import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import './TNPPendingRequests.css';

const TNPPendingRequests = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const department = queryParams.get('department');

  const [requests, setRequests] = useState([]);
  const [selectedRequestIds, setSelectedRequestIds] = useState([]);

  useEffect(() => {
    if (department) {
      axios
        .get(`http://localhost:3001/api/tnp-pending-requests?department=${department}`)
        .then((response) => {
          console.log('Fetched data:', response.data);
          setRequests(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [department]);

  const handleCheckboxChange = (e, requestId) => {
    if (e.target.checked) {
      setSelectedRequestIds((prev) => [...prev, requestId]);
    } else {
      setSelectedRequestIds((prev) => prev.filter((id) => id !== requestId));
    }
  };

  const handleApprove = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/tnp-approved-requests", {
        requestIds: selectedRequestIds,
      });

      if (response.status === 200) {
        setRequests((prevRequests) =>
          prevRequests.filter((request) => !selectedRequestIds.includes(request._id))
        );
        setSelectedRequestIds([]);
      }
    } catch (error) {
      console.error("Error approving requests:", error);
    }
  };

  const handlePause = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/tnp-paused-requests", {
        requestIds: selectedRequestIds,
      });

      if (response.status === 200) {
        setRequests((prevRequests) =>
          prevRequests.filter((request) => !selectedRequestIds.includes(request._id))
        );
        setSelectedRequestIds([]);
      }
    } catch (error) {
      console.error("Error pausing requests:", error);
    }
  };

  return (
    <div className="tnp-pending-requests">
       {/* Add the image container here  */} <div className="image">
                <img src="https://www.logolynx.com/images/logolynx/9f/9f2c4042d28462d69f738e6018bb4ff9.jpeg" alt="Description" />
              </div>
      <Navbar />
      <h1><b>Pending Requests</b></h1>
      <table>
        <thead>
          <tr>
          <th>Select</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>URN</th>
            <th>CRN</th>
            <th>Department</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRequestIds.includes(request._id)}
                  onChange={(e) => handleCheckboxChange(e, request._id)}
                />
                    </td>
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
      <div className="actions">
        <button className="approve" onClick={handleApprove} disabled={selectedRequestIds.length === 0}>
          Approve
        </button>
        <button className="pause" onClick={handlePause} disabled={selectedRequestIds.length === 0}>
          Pause
        </button>
      </div>
    </div>
  );
};

export default TNPPendingRequests;
