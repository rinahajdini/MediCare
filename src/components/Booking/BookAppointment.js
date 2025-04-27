import React, { useState } from 'react';
import axios from 'axios';
import './BookAppointment.css';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    doctorId: '',
    userId: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/appointments/book', formData);
      alert(res.data.message);
    } catch (err) {
      alert('Error booking appointment');
    }
  };

  return (
    <div className="form-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input type="text" name="doctorId" placeholder="Doctor ID" onChange={handleChange} required />
        <input type="text" name="userId" placeholder="User ID" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookAppointment;
