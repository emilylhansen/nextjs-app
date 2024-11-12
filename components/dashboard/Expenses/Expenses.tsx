"use client";
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Paper from "@/components/core/Paper/Paper";
import styles from "./expenses.module.scss";
import { Title } from "@mantine/core";
import { Padding } from "@/styles/spacing.types";

export const Expenses = () => {
  return (
    <Paper className={styles.paper} shadow="xl" radius="xl" padding={Padding.M}>
      <Title order={5} fw="bold" className={styles.title}>
        Expenses
      </Title>
      <PieChart
        sx={{
          ".MuiChartsLegend-series text": {
            fontWeight: "bold !important",
            fontSize: "0.8rem !important",
          },
        }}
        className={styles.chart}
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
