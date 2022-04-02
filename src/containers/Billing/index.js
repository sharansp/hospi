import { Box } from "@mui/material";
import React from "react";

import "./billing.css";
import { BillingHeader } from "./Header";

const BillingContainer = ({ children }) => {
  return (
    <>
      <Box component='h4' sx={{ pl: 2 }} ><div >Medication and prescription</div>
      </Box>
      <BillingHeader></BillingHeader>
    </>

  );
};

export default BillingContainer;
