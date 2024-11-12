import { pipe, Array } from "effect";

export const combineClassNames = (classNames: Array<string>) =>
  pipe(classNames, Array.join(" "));
