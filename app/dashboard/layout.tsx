"use client";
import { Grid } from "@/components/layout/Grid/Grid";
import { Header } from "@/components/layout/Header/Header";
import { TopNavigation } from "@/components/dashboard/TopNavigation/TopNavigation";
import React from "react";

import {
  IconArrowsDiff,
  IconFileText,
  IconLayoutDashboard,
} from "@tabler/icons-react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid>
      <div
        className="col-span-7 col-start-3 row-start-1 pt-10 px-6"
        data-cy="dashboard-header"
      >
        <Header title="Dashboard" />
      </div>
      <React.Fragment>
        <div className="col-span-7 col-start-3 row-start-2 px-6">
          <TopNavigation
            routes={[
              {
                route: "/dashboard/overview",
                title: "Overview",
                icon: <IconLayoutDashboard />,
              },
              {
                route: "/dashboard/send-request-funds",
                title: "Send & Request Funds",
                icon: <IconArrowsDiff />,
              },
              {
                route: "/dashboard/statements",
                title: "Statements",
                icon: <IconFileText />,
              },
            ]}
          />
        </div>
        {children}
      </React.Fragment>
    </Grid>
  );
};

export default layout;
