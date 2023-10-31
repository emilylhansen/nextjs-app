"use client";
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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Cards = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <div className="flex justify-between items-baseline	">
        <h3 className="font-bold mb-4">
          Your cards <Chip label="5" color="primary" size="small" />
        </h3>
        <IconButton
          aria-label="delete"
          className=" border-solid border-2 border-slate-200 rounded-lg	"
          size="small"
          onClick={handleOpen}
        >
          <AddOutlinedIcon />
        </IconButton>
      </div>
      <div className="flex flex-col-reverse mb-8">
        <Paper className="h-40 -mt-36 relative w-[80%] mx-auto">card 1</Paper>
        <Paper className="h-40 -mt-36 relative w-[90%] mx-auto">card 2</Paper>
        <Paper className="h-40 relative">card 3</Paper>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
};
