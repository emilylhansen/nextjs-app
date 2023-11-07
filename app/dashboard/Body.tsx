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

export const Body = ({
  tab,
  children,
}: {
  tab: TopNavigationItemId;
  children?: React.ReactNode;
}) => {
  return <div>{TabBodyMap[tab]}</div>;
};
