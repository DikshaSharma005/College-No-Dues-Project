import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './PausedRequests.css';

const PausedRequests = () => {
  const [pausedrequests, setpausedrequests] = useState([]);
  const [selectedRequestIds, setSelectedRequestIds] = useState([]);
  const department = localStorage.getItem('department');

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/paused-requests?department=${department}`)
      .then((response) => {
        setpausedrequests(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [department]);

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
      const response = await axios.post("http://localhost:3001/api/revert-requests", {
        requestIds: Array.from(selectedRequestIds),
      });

      if (response.status === 200) {
        // Fetch the updated list of paused requests
        const response2 = await axios.get("http://localhost:3001/api/paused-requests");
        setpausedrequests(response2.data);
        setSelectedRequestIds(new Set());
      } else {
        throw new Error("Failed to revert requests");
      }
    } catch (error) {
      console.error("Error reverting requests:", error);
    }
  };
  
  const handleApprove = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/approved-requests-from-paused", {
        requestIds: Array.from(selectedRequestIds),
      });

      if (response.status === 200) {
        setpausedrequests((prevRequests) =>
          prevRequests.filter((request) => !selectedRequestIds.has(request._id))
        );
        setSelectedRequestIds(new Set());
      } else {
        throw new Error("Failed to approve requests");
      }
    } catch (error) {
      console.error("Error approving requests:", error);
    }
  };

  return (
    <div className="paused-requests">
       {/* Add the image container here */}
       <div className="image">
                <img src="https://www.logolynx.com/images/logolynx/9f/9f2c4042d28462d69f738e6018bb4ff9.jpeg" alt="Description" />
              </div>
      <Navbar />
      <h1><b>Paused Requests</b></h1>
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
  {pausedrequests.map((request) => (
    <tr key={request._id}>
      <td>
        <input
          type="checkbox"
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