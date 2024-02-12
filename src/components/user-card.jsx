"use client";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function UserCard({ user }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        sx={{ height: 300, objectFit: "cover" }}
        image={user.image}
        title="User Image"
      />
      <CardContent>
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
