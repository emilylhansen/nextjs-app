import React from "react";
import Transaction from "@/components/RecentActivityItem";
import prisma from "@/db";
import { link } from "fs";
import Paper from "@mui/material/Paper";
import { Navigation } from "@/components/Navigation";
import { Topbar } from "@/components/Topbar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import StraightOutlinedIcon from "@mui/icons-material/StraightOutlined";
import Chip from "@mui/material/Chip";
import { Sidebar } from "@/components/Sidebar";
import { AxisOptions, Chart } from "react-charts";
import { Header } from "@/components/Header";

export const Balance = () => {
  return (
    <Paper className="h-full rounded-3xl justify-center items-center	flex flex-col">
      <span className="bold font-bold">Total balance</span>
      <div className="flex pt-6 pb-8">
        <span className="text-sm font-bold">$</span>
        <span className="text-6xl font-bold">10,000</span>
      </div>
      <Chip
        label="3.27%"
        color="success"
        icon={<StraightOutlinedIcon />}
        className="rounded-md"
      />
    </Paper>
  );
};
