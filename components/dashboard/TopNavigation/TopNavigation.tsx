"use client";
import Paper from "@/components/core/Paper/Paper";
import { List, ThemeIcon } from "@mantine/core";
import { Array, pipe } from "effect";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./topNavigation.module.scss";
import { TopNavigationItem } from "@/components/dashboard/TopNavigation/topNavigation.types";

export const TopNavigation = ({
  routes,
}: {
  routes: Array<TopNavigationItem>;
}) => {
  const pathname = usePathname();

  return (
    <Paper className={styles.paper} shadow="xl" radius="xl">
      <List component="nav" className={styles.list}>
        {pipe(
          routes,
          Array.map(({ route, title, icon }) => {
            const isActive = pathname === route;

            return (
              <Link
                key={route}
                href={route}
                className={pipe(
                  [styles.link, isActive ? styles.linkActive : ""],
                  Array.join(" ")
                )}
              >
                <List.Item
                  classNames={{ itemWrapper: styles.listItemWrapper }}
                  icon={
                    <ThemeIcon
                      variant="white"
                      classNames={{ root: styles.themeIcon }}
                    >
                      {icon}
                    </ThemeIcon>
                  }
                >
                  {title}
                </List.Item>
              </Link>
            );
          })
        )}
      </List>
    </Paper>
  );
};
