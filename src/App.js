import React from "react";
import { Stack } from "@mui/material";
import ButtonComponent from "./components/ButtonComponent";
function App() {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ButtonComponent />
    </Stack>
  );
}

export default App;
