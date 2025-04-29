import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DoctorList.css'; // Import the CSS file

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/doctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  }, []);

  return (
    <div className="doctor-list-container">
      <h2>Available Doctors</h2>
      <div className="card-grid">
        {doctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p><strong>Specialization:</strong> {doctor.spec}</p>
            <p><strong>City:</strong> {doctor.city}</p>
            <p><strong>Timing:</strong> {doctor.time}</p>
            <p><strong>Fees:</strong> ₹{doctor.fees}</p>
            <p><strong>Available:</strong> {doctor.avai ? "Yes" : "No"}</p>
            <p><strong>Rating:</strong> ⭐ {doctor.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
