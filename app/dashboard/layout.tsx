"use client";
import { Grid } from "@/components/Grid";
import { Header } from "@/components/Header";
import { TopNavigation } from "@/components/TopNavigation/TopNavigation";
import React from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid>
      <div className="col-span-7 col-start-3 row-start-1 pt-10 px-6">
        <Header />
      </div>
      <React.Fragment>
        <div className="col-span-7 col-start-3 row-start-2 px-6">
          <TopNavigation
            routes={[
              {
                route: "/dashboard/overview",
                title: "Overview",
                icon: <AutoAwesomeMosaicOutlinedIcon />,
              },
              {
                route: "/dashboard/send-money",
                title: "Send Money",
                icon: <ArrowCircleRightOutlinedIcon />,
              },
              {
                route: "/dashboard/request-money",
                title: "Request Money",
                icon: <ArrowCircleLeftOutlinedIcon />,
              },
              {
                route: "/dashboard/statements",
                title: "Statements",
                icon: <ArticleOutlinedIcon />,
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
