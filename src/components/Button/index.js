import { Box } from "@mui/material";
import React from "react";

export const Button = () => {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
    <div>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
    <div>
      <Button variant="outlined" size="small">
        Small
      </Button>
      <Button variant="outlined" size="medium">
        Medium
      </Button>
      <Button variant="outlined" size="large">
        Large
      </Button>
    </div>
    <div>
      <Button variant="contained" size="small">
        Small
      </Button>
      <Button variant="contained" size="medium">
        Medium
      </Button>
      <Button variant="contained" size="large">
        Large
      </Button>
    </div>
  </Box>);
};
