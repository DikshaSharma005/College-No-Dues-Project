// PausedRequests.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './PausedRequests.css';


const PausedRequests = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/paused-requests')
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [selectedRequestIds, setSelectedRequestIds] = useState(new Set());

  const handleCheckboxChange = (e, requestId) => {
    if (e.target.checked) {
      setSelectedRequestIds((prev) => new Set([...prev, requestId]));
    } else {
      setSelectedRequestIds((prev) => {
        const newSet = new Set([...prev]);
        newSet.delete(requestId);
        return newSet;
      });
    }
  };
  
  const handleRevert = async () => {
    try {
      await axios.post("http://localhost:3001/api/pending-requests", {
        requestIds: Array.from(selectedRequestIds),
      });
      // Fetch the updated list of paused requests
      const response = await axios.get("http://localhost:3001/api/paused-requests");
      setRequests(response.data);
    } catch (error) {
      console.error("Error reverting requests:", error);
    }
  };

  const handleApprove = async () => {
    try {
      await axios.post("http://localhost:3001/api/approved-requests", {
        requestIds: Array.from(selectedRequestIds),
      });
      // Fetch the updated list of paused requests
      const response = await axios.get("http://localhost:3001/api/paused-requests");
      setRequests(response.data);
    } catch (error) {
      console.error("Error approving requests:", error);
    }
  };
  


  return (
    <div className="paused-requests">
      <Navbar />
      <h1><b>Paused Requests</b></h1>
      <table>
      <thead>
  <tr>
    <th>Select</th>
    <th>Student ID</th>
    <th>Request Details</th>
    <th>Father Name</th>
    <th>URN</th>
    <th>CRN</th>
    <th>Date</th>
  </tr>
</thead>
<tbody>
  {requests.map((request) => (
    <tr key={request._id}>
      <td>
        <input
          type="checkbox"
          onChange={(e) => handleCheckboxChange(e, request._id)}
        />
      </td>
      <td>{request.studentId}</td>
      <td>{request.requestDetails}</td>
      <td>{request.fatherName}</td>
      <td>{request.URN}</td>
      <td>{request.CRN}</td>
      <td>{new Date(request.createdAt).toLocaleDateString()}</td>
    </tr>
         ))}
       </tbody>

      </table>

      <button className="button-action" onClick={handleRevert}>
         Revert
      </button>
      <button className="button-action" onClick={handleApprove}>
         Approve
      </button>

    </div>

    
  );

};

export default PausedRequests;
