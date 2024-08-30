// CertificateForm.jsx
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db, ref, get, child } from '../Firebase'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import './CertificateForm.css';

const CertificateForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    event: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const dbRef = ref(db);
    
    try {
      console.log("Fetching data from Firebase....");
      const snapshot = await get(child(dbRef, 'Participants'));
      if (snapshot.exists()) {
        let foundParticipant = false;
        snapshot.forEach(roleSnapshot => {
          roleSnapshot.forEach(participantSnapshot => {
            const participant = participantSnapshot.val();
            if (participant.fullName === formData.fullName &&
                participant.role === formData.role &&
                participant.event === formData.event) { // Ensure event also matches
              foundParticipant = true;
              navigate('/previewCertificate', { state: { formData } });
              return true; // Break out of loops
            }
          });
          if (foundParticipant) return true; // Break out of outer loop
        });
        if (!foundParticipant) {
          toast.error('Participant not found or details do not match!');
        }
      } else {
        toast.error('No participants found!');
      }
    } catch (error) {
      console.error("Error fetching participant data:", error);
      toast.error('Error checking participant data.');
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="login-box">
          <h2>Generate your Certificate</h2>
          <form className="certificate-form" onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                value={formData.fullName}
                required
              />
              <label>Full Name</label>
            </div>
            <div className="input-box">
              <input
                type="text"
                name="role"
                onChange={handleChange}
                value={formData.role}
                required
              />
              <label>Role</label>
            </div>
            <div className="input-box">
              <input
                type="text"
                name="event"
                onChange={handleChange}
                value={formData.event}
                required
              />
              <label>Event</label>
            </div>
            <button type="submit" className="btnPreview">Preview Certificate</button>
          </form>
          <ToastContainer />
        </div>

        {[...Array(50)].map((_, i) => (
          <span key={i} style={{ '--i': i }}></span>
        ))}
      </div>
    </div>
  );
};

export default CertificateForm;
