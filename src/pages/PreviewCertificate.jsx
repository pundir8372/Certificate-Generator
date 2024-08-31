// PreviewCertificate.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import CertificatePreview from '../components/CertificatePreview';
import jsPDF from 'jspdf';
import "../pages/PreviewCertificate.css";

const PreviewCertificate = () => {
  const location = useLocation();
  const { formData } = location.state || {}; // Destructure the passed state

  const handleGenerateCertificate = () => {
    const doc = new jsPDF({
      orientation: 'portrait', // A4 paper is portrait by default
      unit: 'mm',
      format: 'a4',
    });
  
    const img = new Image();
    img.src = "/Certificate2.jpg.jpg"; // Update this path to the correct image path
  
    img.onload = () => {
      doc.addImage(img, 'JPG', 0, 0, 210, 297); // Add the image with the correct dimensions for A4 paper
      
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(20);
  
      // Adjusting the text coordinates to fit within the designated areas on the certificate
  
      // Full Name
      const nameTextWidth = doc.getTextWidth(formData.fullName);
      doc.text(formData.fullName, (doc.internal.pageSize.width - nameTextWidth) / 2, 155); // Adjust Y position to fit the name inside the space
  
      
  
      // Event
      const eventTextWidth = doc.getTextWidth(formData.event);
      doc.text(formData.event, (doc.internal.pageSize.width - eventTextWidth) / 2, 190); // Adjust Y position to fit the event inside the space
  
      doc.save(`Sahyog_Dehradun_Certificate.pdf`);
    };
  };

  return (
    <div>
      <CertificatePreview formData={formData} />
      <button onClick={handleGenerateCertificate} className="download">
        Download Certificate
      </button>
    </div>
  );
};

export default PreviewCertificate;
