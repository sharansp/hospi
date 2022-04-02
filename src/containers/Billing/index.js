import { Box } from "@mui/material";
import React from "react";
import { Button } from "../../components/Button";
import "./billing.css";

const BillingContainer = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Button variant="contained" size="small">
        Small
      </Button>
      <Button variant="contained" size="medium">
        Medium
      </Button>
      <Button variant="contained" size="large">
        Large
      </Button>
      </Box>
    </div>
  );
};

export default BillingContainer;
