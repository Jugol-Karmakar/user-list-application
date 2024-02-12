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

const override = {
  display: "flex",
  margin: "0 auto",
  marginTop: 150,
};

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState("");
  const [searchUser, setSearchUser] = useState("");

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
    usersData();
  }, []);

  console.log(users);

  return (
    <Container>
      <Typography>User Information</Typography>

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
            {/* <Button variant="contained" color="primary">
              Search
            </Button> */}
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box>
            <Button variant="contained" color="primary" fullWidth size="large">
              Add a User
            </Button>
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
