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

export const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <Box sx={{ minWidth: 140 }}>
        <FormControl fullWidth size="small" className="text-xs	">
          <InputLabel id="demo-simple-select-label">Showing for</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="showing-for"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </header>
  );
};
