// ResidentList.js
import React from 'react';
import './ResidentList.css'; // Import your stylesheet

const ResidentList = ({ resident }) => {
  return (
    <div className="resident-list">
      {resident && (
        <>
          <h4>Resident:</h4>
          <p>Name: {resident.name}</p>
          <p>Height: {resident.height}</p>
          <p>Mass: {resident.mass}</p>
          <p>Gender: {resident.gender}</p>
        </>
      )}
    </div>
  );
};

export default ResidentList;
