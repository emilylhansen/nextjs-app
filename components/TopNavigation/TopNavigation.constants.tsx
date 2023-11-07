import {
  TopNavigationItem,
  TopNavigationItemId,
} from "@/components/TopNavigation/TopNavigation.types";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";

export const TOP_NAVIGATION_ITEMS: Array<TopNavigationItem> = [
  {
    title: "Overview",
    icon: <AutoAwesomeMosaicOutlinedIcon />,
    id: TopNavigationItemId.Overview,
  },
  {
    title: "Send Money",
    icon: <ArrowCircleRightOutlinedIcon />,
    id: TopNavigationItemId.SendMoney,
  },
  {
    title: "Request Money",
    icon: <ArrowCircleLeftOutlinedIcon />,
    id: TopNavigationItemId.RequestMoney,
  },
  {
    title: "Statements",
    icon: <ArticleOutlinedIcon />,
    id: TopNavigationItemId.Statements,
  },
];
