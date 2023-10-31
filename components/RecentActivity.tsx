import React from "react";
import Paper from "@mui/material/Paper";
import prisma from "@/db";
import RecentActivityItem from "@/components/RecentActivityItem";
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
import { Transaction } from "@prisma/client";

export const RecentActivity = ({
  transactions,
}: {
  transactions: Array<Transaction>;
}) => {
  return (
    <React.Fragment>
      <h3 className="font-bold mb-4">Recent Activity</h3>
      <ul className="flex-1">
        {pipe(
          transactions,
          A.takeLeft(4),
          A.map((transaction) => (
            <RecentActivityItem
              key={transaction.id}
              value={transaction.value}
            />
          ))
        )}
        <li>
          <Link href={`/transactions`}>View more</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};
