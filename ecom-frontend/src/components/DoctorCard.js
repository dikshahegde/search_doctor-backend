import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <h3>{doctor.name}</h3>
      <p><strong>Speciality:</strong> {doctor.spec}</p>
      <p><strong>City:</strong> {doctor.city}</p>
      <p><strong>Fees:</strong> ₹{doctor.fees}</p>
      <p><strong>Available:</strong> {doctor.avai ? "Yes" : "No"}</p>
      <p><strong>Rating:</strong> ⭐{doctor.rating}</p>
    </div>
  );
};

export default DoctorCard;
