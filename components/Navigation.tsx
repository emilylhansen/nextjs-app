import React from "react";
import Paper from "@mui/material/Paper";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import Icon from "@mui/material/Icon";
import Link from "next/link";
import * as A from "fp-ts/Array";
import { pipe } from "fp-ts/function";
import PixIcon from "@mui/icons-material/Pix";
import _ from "lodash";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";

enum NavigationItemTitle {
  Dashboard = "DASHBOARD",
  Transactions = "TRANSACTIONS",
  Cards = "CARDS",
  Reports = "REPORTS",
  Settings = "SETTINGS",
  Chat = "CHAT",
}

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

export const Navigation = () => {
  return (
    <Paper className="h-full rounded-3xl py-6">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        className="text-slate-400"
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" className="flex pb-6 px-8">
            <ListItemIcon className="flex items-center">
              <PixIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ my: 0 }}
              primary="Fintech"
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: "medium",
                letterSpacing: 0,
              }}
            />
          </ListSubheader>
        }
      >
        {pipe(
          Navigation_ITEMS,
          A.map((NavigationItem) => (
            <Link
              key={NavigationItem.title}
              href={`/${NavigationItem.title.toLocaleLowerCase()}`}
            >
              <ListItemButton className=" group px-8 py-2 my-4 hover:bg-white hover:border-blue border-transparent border-r-4 border-solid">
                <ListItemIcon className="text-slate-400 group-hover:text-blue">
                  {NavigationItem.icon}
                </ListItemIcon>
                <ListItemText
                  primary={_.capitalize(NavigationItem.title)}
                  className="group-hover:text-slate-900"
                />
              </ListItemButton>
            </Link>
          ))
        )}
      </List>
    </Paper>
  );
};
