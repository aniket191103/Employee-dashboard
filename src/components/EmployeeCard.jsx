import React, { useState } from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import '../styles.css';

const EmployeeCard = ({ employee }) => {
  const [employeeData, setEmployeeData] = useState(employee);

  // Function to update the employee's hours
  const updateHours = (newHours) => {
    const change = newHours - employeeData.hours;
    setEmployeeData({
      ...employeeData,
      hours: newHours,
      change: Math.abs(change), // Calculate the absolute change
      changePositive: change > 0, // Determine if the change is positive
    });
  };


  return (
    <Paper className="paper">
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <Typography variant="h6">{employeeData.rank}</Typography>
        </Grid>
        <Grid item xs={2}>
          <img className="avatar" src={employeeData.image} alt={employeeData.name} />
          <Typography>{employeeData.name}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>{employeeData.designation}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>{employeeData.hours} hrs</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={employeeData.changePositive ? 'positiveChange' : 'negativeChange'}>
            {employeeData.changePositive ? `▲ ${employeeData.change} hrs` : `▼ ${employeeData.change} hrs`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EmployeeCard;
