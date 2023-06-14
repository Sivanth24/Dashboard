import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import BreakdownChart from "components/BreakdownChart";

const Breakdown = () => {
  return (
    <Box m="1rem 2.5rem">
      {/* HEADER */}
      <Header title="BREAKDOWN" subtitle="Breakdown of sales by category" />

      {/* RESUSEABLE PIE CHART */}
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
