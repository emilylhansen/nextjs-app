"use client";
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Paper } from "@mui/material";

export const Expenses = () => {
  return (
    <Paper className="h-full rounded-3xl flex flex-col p-6">
      <span className="bold font-bold pb-4">Expenses</span>

      <PieChart
        sx={{
          ".MuiChartsLegend-series text": {
            fontWeight: "bold !important",
            fontSize: "0.8rem !important",
          },
        }}
        className="flex justify-center items-center"
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Utilities", color: "#FF8BB9" },
              { id: 1, value: 15, label: "Medical", color: "#6F82FF" },
              { id: 2, value: 20, label: "Entertainment", color: "#FEAFD0" },
            ],
          },
        ]}
      />
    </Paper>
  );
};
