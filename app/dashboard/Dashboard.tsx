"use client";
import { TopNavigation } from "@/components/TopNavigation/TopNavigation";
import { TopNavigationItemId } from "@/components/TopNavigation/TopNavigation.types";
import React from "react";
import { Overview } from "@/app/dashboard/Overview";
import { RequestMoney } from "@/app/dashboard/RequestMoney";
import { SendMoney } from "@/app/dashboard/SendMoney";
import { Statements } from "@/app/dashboard/Statements";

export const TabBodyMap: Record<TopNavigationItemId, React.JSX.Element> = {
  [TopNavigationItemId.Overview]: <Overview />,
  [TopNavigationItemId.SendMoney]: <SendMoney />,
  [TopNavigationItemId.RequestMoney]: <RequestMoney />,
  [TopNavigationItemId.Statements]: <Statements />,
};

export const Dashboard = () => {
  const [tab, setTab] = React.useState<TopNavigationItemId>(
    TopNavigationItemId.Overview
  );

  const handleSetTab = (tab: TopNavigationItemId) => setTab(tab);

  return (
    <React.Fragment>
      <div className="col-span-7 col-start-3 row-start-2 px-6">
        <TopNavigation tab={tab} handleSetTab={handleSetTab} />
      </div>
      {TabBodyMap[tab]}
    </React.Fragment>
  );
};
