import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Button, TextField, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../Style.css'

const url = 'http://localhost:8080/applyJob';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const ApplyJobForm = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    experience: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(url, userData)
    .then(response => {
      console.log(response);
      setUserData({
        firstName: '',
        lastName: '',
        email: '',
        experience: '',
      })
      alert("Applied for job");
    })
    .catch(error => {
        console.error('There was an error!', error);
        alert("Error in Appling job");
    });
  };

  let navigate = useNavigate();
  const handleClose = () => {
    navigate('/');
  }

  return (
    <Box className="main">
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        data-test-id='f_name'
        label="First Name"
        variant="filled"
        required
        value={userData.firstName}
        placeholder="your name"
        onChange={e => setUserData({...userData,firstName: e.target.value})}
      />
      <TextField
        data-test-id='l_name'
        label="Last Name"
        variant="filled"
        required
        value={userData.lastName}
        placeholder="last name"
        onChange={e => setUserData({...userData,lastName: e.target.value})}
      />
      <TextField
        data-test-id='email'
        label="Email"
        variant="filled"
        type="email"
        required
        value={userData.email}
        placeholder="abc@gmail.com"
        onChange={e => setUserData({...userData,email: e.target.value})}
      />
      <TextField
        data-test-id='experience'
        label="Experience"
        variant="filled"
        type="text"
        required
        value={userData.experience}
        placeholder="5"
        onChange={e => setUserData({...userData,experience: e.target.value})}
      />
      <div>
        <Button variant="contained" onClick={handleClose} data-test-id='cancel-button'>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" data-test-id='apply-button'>
          Apply
        </Button>
      </div>
    </form>
    </Box>
  );
};

export default ApplyJobForm;