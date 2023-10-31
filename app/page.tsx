import Transaction from "@/components/RecentActivityItem";
import prisma from "@/db";
import { link } from "fs";
import React from "react";
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
import { Balance } from "@/components/Balance";
import { Expenses } from "@/components/Expenses";
import { TransactionsOverview } from "@/components/TransactionsOverview";

const Home = async () => {
  // await prisma.transaction.create({ data: { type: "send", value: "400" } });

  return (
    <div className="grid grid-cols-12 grid-rows-8 gap-4 h-screen  bg-gradient-to-b from-pastel-purple to-pastel-blue">
      <div className="col-span-2 row-span-8 ml-4 my-4">
        <Navigation />
      </div>
      <div className="col-span-3 row-span-8 col-start-10 row-start-1">
        <Sidebar />
      </div>
      <div className="col-span-7 col-start-3 row-start-1 pt-10 px-6">
        <Header />
      </div>
      <div className="col-span-7 col-start-3 row-start-2 px-6">
        <Topbar />
      </div>
      <div className="col-span-3 row-span-3 col-start-3 row-start-3 pl-6">
        <Balance />
      </div>
      <div className="col-span-4 row-span-3 col-start-6 row-start-3 pr-6">
        <Expenses />
      </div>
      <div className="col-span-7 row-span-3 col-start-3 row-start-6 pb-4 px-6">
        <TransactionsOverview />
      </div>
    </div>
  );
};

export default Home;
