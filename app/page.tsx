import { Grid } from "@/components/Grid";
import React from "react";

const Home = async ({ children }: { children: React.ReactNode }) => {
  // await prisma.transaction.create({ data: { type: "send", value: "400" } });

  return <Grid></Grid>;
};

export default Home;
