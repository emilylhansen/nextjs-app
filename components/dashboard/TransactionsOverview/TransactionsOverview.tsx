"use client";
import Paper from "@/components/core/Paper/Paper";
import { Padding } from "@/styles/spacing.types";
import { Title } from "@mantine/core";
import { BarChart } from "@mui/x-charts/BarChart";
import styles from "./transactionsOverview.module.scss";

export const TransactionsOverview = () => {
  return (
    <Paper className={styles.paper} shadow="xl" radius="xl" padding={Padding.M}>
      <Title order={5} fw="bold" className={styles.title}>
        Transactions Overview
      </Title>

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
          { data: [4, 3], color: styles.primaryColor, label: "Savings" },
          { data: [1, 6], color: styles.secondaryColor, label: "Expenses" },
        ]}
      />
    </Paper>
  );
};
