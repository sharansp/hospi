import { Box } from "@mui/material";
import React from "react";
import CollapsibleTable from "../../components/Table";

import "./billing.css";
import { BillingHeader } from "./Header";

const BillingContainer = ({ children }) => {
  return (
    <>
      <Box component='h4' sx={{ pl: 2 }} ><div >Medication and prescription</div>
      </Box>
      <BillingHeader></BillingHeader>
      <Box sx={{ pb: 2 }} ></Box>
      <CollapsibleTable></CollapsibleTable>

    </>

  );
};

export default BillingContainer;
