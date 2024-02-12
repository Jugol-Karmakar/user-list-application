"use client";
import React, { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import UserCard from "../../components/user-card";
import AdduserModal from "../../components/adduser-modal";

// CSS override for loader
const override = {
  display: "flex",
  margin: "0 auto",
  marginTop: 150,
};

// UserList component
export default function UserList() {
  // State variables
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [open, setOpen] = React.useState(false);

  // Fetch users data
  useEffect(() => {
    const usersData = async () => {
      setLoading(true);
      setTimeout(async () => {
        const data = await fetch("https://dummyjson.com/users");
        const response = await data.json();
        setUsers(response);
        setLoading(false);
      }, 2000);
    };
    usersData(); // Call fetchUsersData function
  }, []);

  console.log(users);

  // Function to handle modal open
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Render UserList component
  return (
    <Container>
      <Typography>User List Information</Typography>

      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginY: "15px",
          paddingY: "20px",
        }}
      >
        <Grid item xs={6} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              label="Search a User......"
              fullWidth
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={handleClickOpen}
            >
              Add a User
            </Button>
            {/* Open modal on button click */}
            <AdduserModal
              open={open}
              setOpen={setOpen}
              handleClose={handleClose}
            />
            {/* Close modal callback */}
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {users.users ? (
          users.users
            .filter((user) => {
              return searchUser.toLowerCase() === " "
                ? user
                : user.firstName
                    .toLowerCase()
                    .includes(searchUser.toLowerCase()) ||
                    user.company.name
                      .toLowerCase()
                      .includes(searchUser.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchUser.toLowerCase());
            })

            .map((user) => {
              {
                /* Map through users array and display UserCard component */
              }
              return (
                <Grid item xs={12} sm={6} md={4} key={user.id}>
                  <UserCard user={user} />
                </Grid>
              );
            })
        ) : (
          <BeatLoader
            color="#0b6ee1"
            loading
            margin={3}
            size={20}
            cssOverride={override}
            speedMultiplier={1}
          />
        )}
      </Grid>
    </Container>
  );
}
