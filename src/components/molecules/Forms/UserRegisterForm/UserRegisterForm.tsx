import React from "react";
import { TextField, Box } from "@mui/material";
import { PrimaryButton, FormBody } from "../../../atoms";
const UserRegisterForm = () => {
  return (
    <FormBody title="REGISTER">
      <>
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="text"
          required
          fullWidth
          id="firstname"
          label="First Name"
          name="firstname"
          autoComplete="firstname"
          autoFocus
        />
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="text"
          required
          fullWidth
          id="lastname"
          label="Last Name"
          name="lastname"
          autoComplete="lastname"
        />
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="text"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          variant="outlined"
          color="secondary"
          type="password"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          autoComplete="password"
        />
        <Box sx={{ mt: 2 }}>
          <PrimaryButton
            text="REGISTER"
            onClick={() => console.log("hello")}
            fullWidth
          />
        </Box>
      </>
    </FormBody>
  );
};

export { UserRegisterForm };