// src/components/CertificatePreview.jsx
import React from 'react';
import './CertificatePreview.css';
import certificateTemplate from '/Certificate2.jpg.jpg'; // Adjust path if necessary

const CertificatePreview = ({ formData }) => {
  return (
    <div className="certificate-preview">
      <img src={certificateTemplate} alt="Certificate Template" className="certificate-template" />
      <div className="certificate-details">
        <div className="name-role">
          <span>{formData.fullName}</span>
          <span>({formData.role})</span>
        </div>
        <div className="event-name">
          <span>{formData.event}</span>
        </div>
      </div>
    </div>
  );
};

export default CertificatePreview;
