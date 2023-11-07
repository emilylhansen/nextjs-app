import { Paper } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const SendMoney = () => {
  return (
    <React.Fragment>
      <div className="col-span-7 row-span-6 col-start-3 row-start-3  pb-4 px-6">
        <Paper className="h-full rounded-3xl p-6 flex flex-col">
          <TextField id="outlined-basic" label="To" variant="outlined" />
          <TextField id="outlined-basic" label="For" variant="outlined" />
          <TextField id="outlined-basic" label="Amount" variant="outlined" />
          <Button variant="contained">Pay</Button>
        </Paper>
      </div>
    </React.Fragment>
  );
};
