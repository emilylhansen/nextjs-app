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
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CircleIcon from "@mui/icons-material/Circle";
import { pipe } from "fp-ts/lib/function";
import * as A from "fp-ts/lib/Array";
import * as NEA from "fp-ts/lib/NonEmptyArray";

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
      <div className="flex justify-between">
        <h3 className="font-bold mb-4">
          Your cards <Chip label="5" color="primary" size="small" />
        </h3>
        <IconButton
          aria-label="delete"
          className=" border-solid border-2 border-slate-200 rounded-lg	w-6 h-6"
          size="small"
          onClick={handleOpen}
        >
          <AddOutlinedIcon />
        </IconButton>
      </div>
      <div className="flex flex-col-reverse mb-8">
        <Paper className="rounded-2xl h-40 -mt-[150px] relative w-[80%] mx-auto bg-gradient-to-r from-indigo-400/[0.25] to-fuchsia-400/[0.25]">
          card 1
        </Paper>
        <Paper className="rounded-2xl h-40 -mt-[150px] relative w-[90%] mx-auto bg-gradient-to-r from-indigo-400/[0.5] to-fuchsia-400/[0.5]">
          card 2
        </Paper>
        <Paper className="rounded-2xl h-40 relative bg-gradient-to-r from-indigo-400 to-fuchsia-400 p-6 text-white flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <CircleIcon className="text-white/[0.7]" />
              <CircleIcon className="-ml-3 text-white/[0.4]" />
            </div>
            <span className="text-xs opacity-80">Debit</span>
          </div>
          <div className="my-auto flex align-start font-bold">
            <span className="text-xs">$</span>
            <span className="text-4xl	">6,544</span>
          </div>
          <div className="text-xs flex justify-between">
            <div className="flex">
              <div className="mr-2 align-center flex items-center">
                {pipe(
                  NEA.range(0, 3),
                  NEA.map((i) => (
                    <CircleIcon key={i} className="text-[4px] mr-[2px]" />
                  ))
                )}
              </div>
              <span className="opacity-80">2341</span>
            </div>
            <span className="opacity-80">04/28</span>
          </div>
        </Paper>
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
