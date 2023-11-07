import { TOP_NAVIGATION_ITEMS } from "@/components/TopNavigation/TopNavigation.constants";
import { TopNavigationItemId } from "@/components/TopNavigation/TopNavigation.types";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import * as A from "fp-ts/Array";
import { pipe } from "fp-ts/function";
import _ from "lodash";

export const TopNavigation = ({
  tab,
  handleSetTab,
}: {
  tab: TopNavigationItemId;
  handleSetTab: (tab: TopNavigationItemId) => void;
}) => {
  return (
    <Paper className="h-full rounded-3xl overflow-hidden">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="flex max-w-none px-2 py-2 text-slate-400"
      >
        {pipe(
          TOP_NAVIGATION_ITEMS,
          A.map((topNavigationItem) => (
            <ListItemButton
              key={topNavigationItem.id}
              className={`group my-1 flex flex-1 flex-col rounded-3xl justify-center items-center hover:bg-blue-400/[0.1] mr-1 last:mr-0 ${
                tab === topNavigationItem.id
                  ? "bg-blue-400/[0.1]"
                  : " bg-transparent"
              }`}
              onClick={() => handleSetTab(topNavigationItem.id)}
            >
              <ListItemIcon
                className={`justify-center group-hover:text-blue-400  ${
                  tab === topNavigationItem.id
                    ? "text-blue-400"
                    : "text-slate-400"
                }`}
              >
                {topNavigationItem.icon}
              </ListItemIcon>
              <ListItemText
                primary={_.capitalize(topNavigationItem.title)}
                className={`text-xs text-center group-hover:text-slate-900 ${
                  tab === topNavigationItem.id
                    ? "text-slate-900"
                    : "text-slate-400"
                }`}
              />
            </ListItemButton>
          ))
        )}
      </List>
    </Paper>
  );
};
