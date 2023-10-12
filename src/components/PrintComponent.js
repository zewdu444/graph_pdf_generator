import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { forwardRef } from "react";

export const PrintComponent = forwardRef((props, ref) => {
  return (
    <div style={{ display: "none" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
        ref={ref}
      >
        <Stack>
          <Typography>Header</Typography>
          <Divider />
        </Stack>
        <Stack>
          <Typography>Body</Typography>
          <Divider />
        </Stack>
        <Stack>Footer</Stack>
      </Box>
    </div>
  );
});

export default PrintComponent;
