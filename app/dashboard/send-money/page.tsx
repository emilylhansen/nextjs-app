import { Paper } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const page = () => {
  return (
    <React.Fragment>
      <div className="col-span-7 row-span-6 col-start-3 row-start-3  pb-4 px-6">
        <Paper className="h-full rounded-3xl p-6 flex flex-col [&>*]:pb-4">
          <TextField
            id="outlined-basic"
            label="To"
            variant="outlined"
            placeholder="Name, username, phone, email"
          />
          <TextField
            id="outlined-basic"
            label="For"
            variant="outlined"
            placeholder="Add a note"
          />
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            type="number"
            placeholder="$ USD"
          />
          <Button variant="contained" color="primary" sx={{ maxWidth: 120 }}>
            Pay
          </Button>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default page;
