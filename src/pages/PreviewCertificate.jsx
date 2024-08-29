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
    const doc = new jsPDF();
    const img = new Image();
    img.src = "/Certificate2.jpg.jpg"; // Update this path

    img.onload = () => {
      doc.addImage(img, 'JPG', 0, 0, 210, 297); // Ensure the format matches the image

      doc.setFontSize(20);
      doc.setFont("Helvetica", "bold");
      doc.text('Certificate of Participation', 20, 30);
      doc.setFontSize(16);
      doc.text(`This is to certify that ${formData.fullName} has participated in the event.`, 20, 50);
      doc.text(`Role/Position: ${formData.role}`, 20, 70);
      doc.text(`Event: ${formData.event}`, 20, 90);

      doc.save(`${formData.fullName}_Certificate.pdf`);
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
