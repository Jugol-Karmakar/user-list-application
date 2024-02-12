"use client";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

// UserCard component displays user information
export default function UserCard({ user }) {
  return (
    // Card component to display user information
    <Card sx={{ height: "100%" }}>
      <CardMedia
        sx={{ height: 300, objectFit: "cover" }}
        image={user.image}
        title="User Image"
      />

      {/* CardContent to display user details */}
      <CardContent>
        {/* Link to user details page */}
        <Link href={`/user-list/${user.firstName}+${user.lastName}`}>
          Name: {user.firstName} {user.lastName}
        </Link>

        <Typography>Email : {user.email}</Typography>
        <Typography>
          Address : {user.address.address} ({user.address.city},
          {user.address.state})
        </Typography>
        <Typography>Company : {user.company.name}</Typography>
      </CardContent>
    </Card>
  );
}
