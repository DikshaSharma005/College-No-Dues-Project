// CertificatePage.js
import React from 'react';
import './CertificatePage.css';

const CertificatePage = () => {
  // Retrieve user details from localStorage
  const studentName = localStorage.getItem('student_name');
  const fatherName = localStorage.getItem('father_name');
  const department = localStorage.getItem('department');
  const URN = localStorage.getItem('URN');

  return (
    <div className="certificate-page">
      {/* Add the image container here */}
      <div className="gneimage">
                <img src="https://www.logolynx.com/images/logolynx/9f/9f2c4042d28462d69f738e6018bb4ff9.jpeg" alt="Description" />
              </div>
      <header>
        <img
          src="https://www.logolynx.com/images/logolynx/9f/9f2c4042d28462d69f738e6018bb4ff9.jpeg"
          alt="GNDEC Logo"
          className="logo"
        />
        <div className="content">
          <h2>
            <strong> Guru Nanak Dev Engineering College</strong>
          </h2>
          <h5>
            <strong>An Autonomous College Under UGC Act 1956</strong>
          </h5>
          <h6>
            AICTE Approved, ISO : 9001-2015 Certified Affiliated to IK Gujral, PTU, Kapurthala
          </h6>
          <h6>IEI Accrediated UG Programmes, Institute Accrediated by NAAC('A'Grade) & TCS</h6>
        </div>
      </header>
      <hr className="separator" />
      <div className="certificate-content">
        <p>
          This is to certify that <strong>{studentName}</strong> S/D/o of <strong>{fatherName}</strong> was a student of <strong>{department}</strong> branch having university roll number cum registration number <strong>{URN}</strong> has successfully completed the
          programme at Guru Nanak Dev Engineering College. This college is affiliated to <strong>I.K. Gujral Punjab Technical University, Jalandhar</strong> and recognized by <strong>All India Council for Technical Education, New Delhi.</strong>The student has obtained the <strong>no dues clearance</strong> and is eligible to obtain all the documents from the respective department.
        </p>
        <br />
        <h3>
          <strong>Assistant Registrar</strong>
        </h3>
      </div>
      
      <div className='comment'>*This is e-generated document. It does not require the signature of any authority</div>
      <hr className="anotherseparator" />
      <div classname="another-content">
        <h6>Gill Park, Gill Road, Ludhiana- 1451006 Punjab</h6>
        <h6>Phone: 0161-5064501 * E-mail : principal@gndec.ac.in * Website: www.gndec.ac.in</h6>
      </div>
    </div>
  );
};

export default CertificatePage;
