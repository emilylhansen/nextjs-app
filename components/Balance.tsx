import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

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
        icon={<ArrowUpwardIcon className="text-sm" />}
        className="rounded-md font-bold text-green-400 bg-green-100"
      />
    </Paper>
  );
};
