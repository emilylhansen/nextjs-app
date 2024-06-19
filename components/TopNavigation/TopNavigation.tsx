import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import * as A from "fp-ts/Array";
import { pipe } from "fp-ts/function";
import _ from "lodash";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TopNavigationItem } from "@/components/TopNavigation/TopNavigation.types";

export const TopNavigation = ({
  routes,
}: {
  routes: Array<TopNavigationItem>;
}) => {
  const pathname = usePathname();

  return (
    <Paper className="h-full rounded-3xl overflow-hidden">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className="flex max-w-none px-1 py-1 text-slate-400 h-full items-center"
      >
        {pipe(
          routes,
          A.map(({ route, title, icon }) => {
            const isActive = pathname === route;

            return (
              <Link
                key={"route"}
                href={route}
                className="flex-1 px-0.5 first:pl-0 last:pr-0 h-full"
              >
                <ListItemButton
                  key={route}
                  className={`group flex flex-col h-full rounded-3xl justify-center items-center hover:bg-blue-400/[0.1] ${
                    isActive ? "bg-blue-400/[0.1]" : " bg-transparent"
                  }`}
                >
                  <ListItemIcon
                    className={`justify-center group-hover:text-blue-400  ${
                      isActive ? "text-blue-400" : "text-slate-400"
                    }`}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={_.capitalize(title)}
                    className={`[&>span]:font-semibold flex items-center text-xs text-center group-hover:text-slate-900 ${
                      isActive ? "text-slate-900" : "text-slate-400"
                    }`}
                  ></ListItemText>
                </ListItemButton>
              </Link>
            );
          })
        )}
      </List>
    </Paper>
  );
};
