import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./PendingRequests.css";

const PendingRequests = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequestIds, setSelectedRequestIds] = useState([]);
  const department = localStorage.getItem("department");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/pending-requests?department=${department}`)
      .then((response) => {
        console.log("Fetched data:", response.data);
        setRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
      const response = await axios.post("http://localhost:3001/api/approve-requests", {
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
      const response = await axios.post("http://localhost:3001/api/pause-requests", {
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
    <div className="pending-requests">
       {/* Add the image container here */}
       <div className="image">
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
      <button className="button-action" onClick={handleApprove}>
        Approve
      </button>
      <button className="button-action" onClick={handlePause}>
         Pause
      </button>

    </div>
  );
};

export default PendingRequests;