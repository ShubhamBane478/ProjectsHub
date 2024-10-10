import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, TextField, Typography } from "@mui/material";
const HabitTrackerForm = () => {
  const [name, setName] = useState("");
  return (
    <>
      <Container maxWidth="md">
        <Typography component={"h1"} variant="h2" align="center">
          Habit Tracker
        </Typography>
        <form>
          <Box
            sx={{
              display: "flex",
              flexDirection: " column",
              gap: 2,
            }}
          >
            <TextField
              label="Habit Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter habit name"
              fullWidth
            />
          </Box>
        </form>
      </Container>
    </>
  );
};

export default HabitTrackerForm;
