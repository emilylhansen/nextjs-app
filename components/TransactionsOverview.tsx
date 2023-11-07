"use client";
import { Paper } from "@mui/material";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export const TransactionsOverview = () => {
  return (
    <Paper className="h-full rounded-3xl p-6">
      <span className="bold font-bold">Transactions Overview</span>

      <BarChart
        sx={{
          ".MuiChartsAxis-root .MuiChartsAxis-tickLabel": {
            fontWeight: "bold",
          },
          ".MuiChartsLegend-series text": {
            fontWeight: "bold !important",
            fontSize: "0.8rem !important",
          },
        }}
        xAxis={[{ scaleType: "band", data: ["21 Oct", "22 Oct"] }]}
        series={[
          { data: [4, 3], color: "#FF8BB9", label: "Savings" },
          { data: [1, 6], color: "#6F82FF", label: "Expenses" },
        ]}
      />
    </Paper>
  );
};
