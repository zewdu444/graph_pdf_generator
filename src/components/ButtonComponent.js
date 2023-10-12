import React, { useRef } from "react";
import { Button, Stack } from "@mui/material";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { useReactToPrint } from "react-to-print";
import PrintComponent from "./PrintComponent";

function ButtonComponent() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Stack spacing={2} direction='row'>
      <PrintComponent ref={componentRef} />
      <Button
        sx={{
          bgcolor: "black",
        }}
        id='print-button'
        variant='contained'
        onClick={handlePrint}
        startIcon={<LocalPrintshopIcon />}
      >
        Print
      </Button>
    </Stack>
  );
}

export default ButtonComponent;
