import React, { useState } from "react";
import { DialogTitle, Grid, IconButton, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";

// Styled Dialog component

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
}));

// AdduserModal component
export default function AdduserModal({ open, setOpen, handleClose }) {
  // State to manage user data
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    address: "",
  });

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleAddUser = async (e) => {
    e.preventDefault();

    // Post user data to the API
    try {
      const response = await axios.post(
        "https://dummyjson.com/users",
        userData
      );
      console.log(response.data); // Log response data
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <React.Fragment>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Modal title
          </DialogTitle>

          <DialogContent dividers>
            <form onSubmit={handleAddUser}>
              <Grid spacing={3}>
                <Grid item md={12}>
                  <TextField
                    label="Enter First Name"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={userData.firstName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                </Grid>
              </Grid>
              <Grid item md={12}>
                <TextField
                  label="Enter Last Name"
                  name="lastName"
                  value={userData.lastName}
                  placeholder="Enter Last Name"
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>

              <Grid item md={6}>
                <TextField
                  label="Enter a Email"
                  name="email"
                  value={userData.email}
                  placeholder="Enter a Email"
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>

              <Grid item md={6}>
                <TextField
                  label="Enter a Company Name"
                  name="company"
                  value={userData.company}
                  placeholder="Enter a Company Name"
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>

              <Grid item md={6}>
                <TextField
                  label="Enter a Valid Address"
                  name="address"
                  value={userData.address}
                  placeholder="Enter a Valid Address"
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item md={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </form>
          </DialogContent>
        </BootstrapDialog>
      </React.Fragment>
    </>
  );
}
