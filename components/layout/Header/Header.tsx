import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { pipe } from "fp-ts/lib/function";
import * as A from "fp-ts/lib/Array";
import * as NEA from "fp-ts/lib/NonEmptyArray";
import styles from "./header.module.scss";
import { Title } from "@mantine/core";

type Props = { title: string; children?: React.ReactNode };

export const Header = ({ title, children }: Props) => {
  // const dates = pipe(
  //   NEA.range(1, 10),
  //   NEA.reduce([new Date()], (dates, _) => {
  //     const prevDate = new Date(dates[dates.length - 1]);
  //     prevDate.setDate(prevDate.getDate() + 1);
  //     return [...dates, prevDate];
  //   }),
  //   A.map((date) => date.toDateString())
  // );

  return (
    <header className={styles.header}>
      <Title order={1} size={36}>
        {title}
      </Title>

      <div className={styles.children}>{children}</div>

      {/* <Box sx={{ minWidth: 140 }}>
        <FormControl fullWidth size="small" className="text-xs	">
          <InputLabel id="demo-simple-select-label">Showing for</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="showing-for"
          >
            {pipe(
              dates,
              A.mapWithIndex((i, date) => (
                <MenuItem key={i} value={date}>
                  {date}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </Box> */}
    </header>
  );
};
