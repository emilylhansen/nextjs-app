"use client";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  NavigationItemTitle,
  selectActivePage,
  set,
} from "@/features/navigation/navigationSlice";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import PixIcon from "@mui/icons-material/Pix";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Paper from "@mui/material/Paper";
import * as A from "fp-ts/Array";
import { pipe } from "fp-ts/function";
import _ from "lodash";
import Link from "next/link";
import React from "react";

type NavigationItem = {
  title: NavigationItemTitle;
  icon: React.JSX.Element;
};

const Navigation_ITEMS: Array<NavigationItem> = [
  {
    title: NavigationItemTitle.Dashboard,
    icon: <InsertChartOutlinedIcon />,
  },
  {
    title: NavigationItemTitle.Transactions,
    icon: <CompareArrowsOutlinedIcon />,
  },
  {
    title: NavigationItemTitle.Cards,
    icon: <PaymentOutlinedIcon />,
  },
  {
    title: NavigationItemTitle.Reports,
    icon: <FeedOutlinedIcon />,
  },
  {
    title: NavigationItemTitle.Settings,
    icon: <SettingsOutlinedIcon />,
  },
  {
    title: NavigationItemTitle.Chat,
    icon: <ChatOutlinedIcon />,
  },
];

const SideNavigation = () => {
  const activePage = useAppSelector(selectActivePage);
  const dispatch = useAppDispatch();

  return (
    <Paper className="h-full rounded-3xl py-6">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        className="text-slate-400"
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" className="flex pb-6 px-4">
            <ListItemIcon className="flex items-center text-blue-400">
              <PixIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ my: 0 }}
              primary="Fintech"
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: "700",
                letterSpacing: 0,
              }}
              className="text-slate-900"
            />
          </ListSubheader>
        }
      >
        {pipe(
          Navigation_ITEMS,
          A.map((navigationItem) => (
            <Link
              key={navigationItem.title}
              href={`/${navigationItem.title.toLocaleLowerCase()}`}
              onClick={() => dispatch(set(navigationItem.title))}
            >
              <ListItemButton
                className={`group px-4 py-2 my-4 hover:bg-blue-400/[0.1] hover:border-blue-400 border-r-4 border-solid ${
                  activePage === navigationItem.title
                    ? "border-blue-400"
                    : "border-transparent"
                }  ${
                  activePage === navigationItem.title
                    ? "bg-blue-400/[0.1]"
                    : "bg-white"
                } `}
              >
                <ListItemIcon
                  className={`group-hover:text-blue-400 ${
                    activePage === navigationItem.title
                      ? "text-blue-400"
                      : "text-slate-400"
                  }`}
                >
                  {navigationItem.icon}
                </ListItemIcon>
                <ListItemText
                  primary={_.capitalize(navigationItem.title)}
                  className={`group-hover:text-slate-900  ${
                    activePage === navigationItem.title
                      ? "text-slate-900"
                      : "text-slate-400"
                  }`}
                />
              </ListItemButton>
            </Link>
          ))
        )}
      </List>
    </Paper>
  );
};

export default SideNavigation;
