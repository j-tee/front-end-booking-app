import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDoctors } from './doctorSlice';

export function Doctor({
  name, email, specialization, picture,
}) {
  const doctorList = useSelector((state) => state.doctor.doctorList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div>
      <h1>List of doctors:</h1>
      {doctorList.map((doctor) => (
        <div key={doctor.id}>
          <h2>{doctor[name]}</h2>
          <p>{doctor[email]}</p>
          <p>{doctor[specialization]}</p>
          <img src={doctor[picture]} alt={`${doctor[name]} profile`} />
        </div>
      ))}
    </div>
  );
}
Doctor.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
export default Doctor;
