import { Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <React.Fragment>
      <Skeleton className="transform-none rounded-3xl col-span-3 row-span-3 col-start-3 row-start-3 ml-6" />
      <Skeleton className="transform-none rounded-3xl col-span-4 row-span-3 col-start-6 row-start-3 mr-6" />
      <Skeleton className="transform-none rounded-3xl col-span-7 row-span-3 col-start-3 row-start-6 mb-4 mx-6" />
    </React.Fragment>
  );
};

export default Loading;
