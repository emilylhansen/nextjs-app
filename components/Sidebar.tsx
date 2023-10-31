import React from "react";
import Paper from "@mui/material/Paper";
import prisma from "@/db";
import Transaction from "@/components/RecentActivityItem";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import IconButton from "@mui/material/IconButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Chip from "@mui/material/Chip";
import Link from "next/link";
import { pipe } from "fp-ts/lib/function";
import * as A from "fp-ts/Array";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Receivers } from "@/components/Receivers";
import { Cards } from "@/components/Cards";
import { RecentActivity } from "@/components/RecentActivity";

const getTransactions = () => prisma.transaction.findMany();

export const Sidebar = async () => {
  const transactions = await getTransactions();

  return (
    <Paper className="h-full px-8 py-8 overflow-hidden flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <Badge badgeContent={4} color="primary">
          <NotificationsNoneOutlinedIcon color="action" />
        </Badge>
        <Avatar alt="Person 1" src="/assets/person_1.png" />
      </div>

      <Cards />
      <Receivers users={[]} />
      <RecentActivity transactions={transactions} />
    </Paper>
  );
};
