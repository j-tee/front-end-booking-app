import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import DoctorDetails from '../components/DoctorDetails';
import './css/single_doctor_page.css';

function DeleteDoctor() {
  const { selectedDoctor } = useSelector((state) => state.selectedDoctor);

  if (selectedDoctor === null) {
    window.location.href = '/';
  }

  return (
    <div className="page">
      <NavBar />
      <main className="content single-doctor-page">
        <DoctorDetails doctor={selectedDoctor}>
          <Link to={`/reserve/${selectedDoctor.id}`}>
            <button className="book-appointment-button" type="button">
              Book Appointment
            </button>
          </Link>
        </DoctorDetails>
      </main>
    </div>
  );
}

export default DeleteDoctor;