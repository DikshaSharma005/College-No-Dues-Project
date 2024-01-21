import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './HODPendingRequests.css';

const HODpendingrequests = () => {
  const [hodPendingRequests, setHODPendingRequests] = useState([]);
  const [selectedRequestIds, setSelectedRequestIds] = useState([]);
  const department = localStorage.getItem("department");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/hod-pending-requests?department=${department}`)
      .then((response) => {
        console.log("Fetched data:", response.data);
        setHODPendingRequests(response.data);
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

  const handleHODApprove = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/hod-approved-requests", {
        requestIds: selectedRequestIds,
      });

      if (response.status === 200) {
        setHODPendingRequests((prevRequests) =>
          prevRequests.filter((request) => !selectedRequestIds.includes(request._id))
        );
        setSelectedRequestIds([]);
      }
    } catch (error) {
      console.error("Error approving requests:", error);
    }
  };

  const handleHODPause = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/hod-paused-requests", {
        requestIds: selectedRequestIds,
      });

      if (response.status === 200) {
        setHODPendingRequests((prevRequests) =>
          prevRequests.filter((request) => !selectedRequestIds.includes(request._id))
        );
        setSelectedRequestIds([]);
      }
    } catch (error) {
      console.error("Error pausing requests:", error);
    }
  };

// const HODpendingrequests = () => {
//   const [hodPendingRequests, setHODPendingRequests] = useState([]);
//   const [selectedRequestIds, setSelectedRequestIds] = useState(new Set());
//   const [userDepartment] = useState("IT");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch the HOD pending requests by making an API request
//         const response = await axios.get(`http://localhost:3001/api/hod-pending-requests?department=${userDepartment}&status=pending`);
//         setHODPendingRequests(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [userDepartment]);

//   const handleCheckboxChange = (e, requestId) => {
//     if (e.target.checked) {
//       setSelectedRequestIds((prev) => new Set([...prev, requestId]));
//     } else {
//       setSelectedRequestIds((prev) => {
//         const newSet = new Set([...prev]);
//         newSet.delete(requestId);
//         return newSet;
//       });
//     }
//   };
  
//   const handleHODApprove = async () => {
//     try {
//       const response = await axios.post("http://localhost:3001/api/hod-approved-requests", {
//         requestIds: Array.from(selectedRequestIds),
//       });
  
//       if (response.status === 200) {
//         // Remove the approved requests from the pending requests
//         setHODPendingRequests((prevRequests) =>
//           prevRequests.filter((request) => !selectedRequestIds.has(request._id))
//         );
  
//         // Clear the selected request IDs after successful approval
//         setSelectedRequestIds(new Set());
//       } else {
//         throw new Error("Failed to approve requests");
//       }
//     } catch (error) {
//       console.error("Error approving requests:", error);
//     }
//   };
  
//   const handleHODPause = async () => {
//     try {
//       const response = await axios.post("http://localhost:3001/api/hod-paused-requests", {
//         requestIds: Array.from(selectedRequestIds),
//       });
  
//       if (response.status === 200) {
//         // Remove paused requests from the pending requests
//         setHODPendingRequests((prevRequests) =>
//           prevRequests.filter((request) => !selectedRequestIds.has(request._id))
//         );
  
//         // Clear the selected request IDs after successful pause
//         setSelectedRequestIds(new Set());
//       } else {
//         throw new Error("Failed to pause requests");
//       }
//     } catch (error) {
//       console.error(`Error pausing requests: ${error.message}`);
//       console.error("Error details:", error);
//     }
//   };
  
  return (
    <div className="pending-requests">
       {/* Add the image container here */}
       <div className="image">
                <img src="https://www.logolynx.com/images/logolynx/9f/9f2c4042d28462d69f738e6018bb4ff9.jpeg" alt="Description" />
              </div>
      <Navbar />

      {/* Display HOD Pending Requests */}
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
          {hodPendingRequests.map((request) => (
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
      <button className="button-action" onClick={handleHODApprove}>
        Approve
      </button>
      <button className="button-action" onClick={handleHODPause}>
        Pause
      </button>
    </div>
  );
};

export default HODpendingrequests;
