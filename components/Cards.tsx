"use client";
import { Card } from "@/components/Card/Card";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React from "react";

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
        <div className="-mt-[150px] w-[80%] mx-auto from-indigo-400/[0.25] to-fuchsia-400/[0.25]">
          <Card />
        </div>
        <div className="-mt-[150px] w-[90%] mx-auto from-indigo-400/[0.5] to-fuchsia-400/[0.5]">
          <Card />
        </div>
        <div className="from-indigo-400 to-fuchsia-400">
          <Card />
        </div>
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
