import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { pipe } from "fp-ts/lib/function";
import * as A from "fp-ts/lib/Array";
import * as NEA from "fp-ts/lib/NonEmptyArray";

export const Header = () => {
  const ds = pipe(
    A.range(1, 10),
    A.reduce([new Date()], (dates, _) => {
      const prevDate = new Date(dates[dates.length - 1]);
      prevDate.setDate(prevDate.getDate() + 1);
      return [...dates, prevDate];
    }),
    A.map((date) => date.toDateString())
  );

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
            {pipe(
              ds,
              A.mapWithIndex((i, d) => (
                <MenuItem key={i} value={d}>
                  {d}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </Box>
    </header>
  );
};
