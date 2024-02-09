import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

export default function UserCard({ user }) {
  console.log(user);
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        sx={{ height: 300, objectFit: "cover" }}
        image={user.image}
        title="green iguana"
      />
      <CardContent>
        <Link href="/UserDetails">
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
