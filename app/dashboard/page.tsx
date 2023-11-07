import { Dashboard } from "@/app/dashboard/Dashboard";
import { Grid } from "@/components/Grid";
import { Header } from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <Grid>
      <div className="col-span-7 col-start-3 row-start-1 pt-10 px-6">
        <Header />
      </div>
      <Dashboard />
    </Grid>
  );
};

export default page;
