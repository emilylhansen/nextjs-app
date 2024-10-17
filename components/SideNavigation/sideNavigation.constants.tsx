import { NavigationItem } from "@/components/SideNavigation/sideNavigation.types";
import { NavigationItemTitle } from "@/lib/features/navigation/navigationSlice";
import {
  IconArrowsLeftRight,
  IconBrandHipchat,
  IconChartBar,
  IconCreditCard,
  IconReportAnalytics,
  IconSettings,
} from "@tabler/icons-react";

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
