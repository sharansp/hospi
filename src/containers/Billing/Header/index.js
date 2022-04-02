import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Box, Button } from '@mui/material';
import React from "react";

export const BillingHeader = () => {
    return (
        <>
            <Box

                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 1,
                    m: 1,
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 3,
                    boxShadow: 3 

                }}
            >
                <AddBoxOutlinedIcon style={{ color: '#04ADBE' }} />
                <label variant="contained" disableElevation>
                    Prescribe Medication
                </label>
            </Box>
        </>)
};
