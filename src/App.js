import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import ButtonComponent from "./components/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchArrest } from "./redux/arrest/ArrestSlice";
function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.arrest);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchArrest());
    }
  }, [dispatch, status]);
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
