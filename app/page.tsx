import { Grid } from "@/components/layout/Grid/Grid";
import React from "react";

const Home = ({ children }: { children: React.ReactNode }) => {
  // await prisma.transaction.create({ data: { type: "send", value: "400" } });

  return <Grid>{children}</Grid>;
};

export default Home;
