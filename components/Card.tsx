import CircleIcon from "@mui/icons-material/Circle";
import Paper from "@mui/material/Paper";
import * as NEA from "fp-ts/lib/NonEmptyArray";
import { pipe } from "fp-ts/lib/function";

export const Card = () => {
  return (
    <Paper className="rounded-2xl h-40 relative bg-gradient-to-r p-6 text-white flex flex-col">
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
  );
};
