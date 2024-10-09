import { NavigationItemTitle } from "@/lib/features/navigation/navigationSlice";
import {
  IconArrowsLeftRight,
  IconBrandHipchat,
  IconChartBar,
  IconCreditCard,
  IconReportAnalytics,
  IconSettings,
} from "@tabler/icons-react";

type NavigationItem = {
  title: NavigationItemTitle;
  icon: React.JSX.Element;
};

export const NAVIGATION_ITEMS: Array<NavigationItem> = [
  {
    title: NavigationItemTitle.Dashboard,
    icon: <IconChartBar />,
  },
  {
    title: NavigationItemTitle.Transactions,
    icon: <IconArrowsLeftRight />,
  },
  {
    title: NavigationItemTitle.Cards,
    icon: <IconCreditCard />,
  },
  {
    title: NavigationItemTitle.Reports,
    icon: <IconReportAnalytics />,
  },
  {
    title: NavigationItemTitle.Settings,
    icon: <IconSettings />,
  },
  {
    title: NavigationItemTitle.Chat,
    icon: <IconBrandHipchat />,
  },
];
