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
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import NorthIcon from "@mui/icons-material/North";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";

type TopbarItem = {
  title: string;
  icon: React.JSX.Element;
};

const TOPBAR_ITEMS: Array<TopbarItem> = [
  {
    title: "Overview",
    icon: <AutoAwesomeMosaicOutlinedIcon />,
  },
  {
    title: "Send Money",
    icon: <ArrowCircleRightOutlinedIcon />,
  },
  {
    title: "Request Money",
    icon: <ArrowCircleLeftOutlinedIcon />,
  },
  {
    title: "Statements",
    icon: <ArticleOutlinedIcon />,
  },
];

export const Topbar = () => {
  return (
    <Paper className="h-full rounded-3xl overflow-hidden">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="flex max-w-none px-2 py-2 text-slate-400"
      >
        {pipe(
          TOPBAR_ITEMS,
          A.map((topbarItem) => (
            <ListItemButton
              key={topbarItem.title}
              className="group my-1 flex flex-1 flex-col rounded-3xl justify-center items-center hover:bg-blue/[0.1]"
            >
              <ListItemIcon className="justify-center text-slate-400 group-hover:text-blue">
                {topbarItem.icon}
              </ListItemIcon>
              <ListItemText
                primary={_.capitalize(topbarItem.title)}
                className="text-xs text-center group-hover:text-slate-900"
              />
            </ListItemButton>
          ))
        )}
      </List>
    </Paper>
  );
};
