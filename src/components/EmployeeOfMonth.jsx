import React from 'react';
import { Typography } from '@mui/material';
import '../styles.css';
import Rakesh from "../assets/RakeshSharma.jpg"

const EmployeeOfMonth = () => {
  const name = "Rakesh Sharma";
//   const imageUrl = `path_to_image/${name.replace(/\s+/g, '_').toLowerCase()}.jpg`;
const imageUrl = './pic.png'

  return (
    <>
      <Typography variant="h5">Employee of the Month</Typography>
      <img className="employeeImage" src={Rakesh} alt={name} />
      <Typography variant="h6">{name}</Typography>
      <Typography>UI/UX Designer</Typography>
    </>
  );
};

export default EmployeeOfMonth;