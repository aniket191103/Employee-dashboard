import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import EmployeeCard from './EmployeeCard';
import EmployeeOfMonth from './EmployeeOfMonth';
import { employees } from '../data';
import Navbar from './Navbar'; // Import Navbar component
import '../styles.css';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    setCurrentTime(new Date());
  }

  return (
    <>
      <Navbar />
      <Container className="container">
        <div className="employeeOfMonth">
          <EmployeeOfMonth />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <ul className="ul">
              <li className="li1">Rank</li>
              <li className="li2">Name</li>
              <li className="li3">Designation</li>
              <li className="li4">No. of hours worked</li>
              <li className="li5">Changes</li>
            </ul>
          </Grid>
          {employees.map((employee) => (
            <Grid item xs={12} key={employee.rank}>
              <EmployeeCard employee={employee} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
