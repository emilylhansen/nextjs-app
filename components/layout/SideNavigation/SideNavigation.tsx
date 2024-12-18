"use client";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Paper from "@/components/core/Paper/Paper";
import { NAVIGATION_ITEMS } from "@/components/layout/SideNavigation/sideNavigation.constants";
import { NavigationItem } from "@/components/layout/SideNavigation/sideNavigation.types";
import {
  selectActivePage,
  set,
} from "@/lib/features/navigation/navigationSlice";
import { Padding } from "@/styles/spacing.types";
import { List, ThemeIcon, Title } from "@mantine/core";
import { IconChartDonut2 } from "@tabler/icons-react";
import { Array, pipe, String } from "effect";
import Link from "next/link";
import styles from "./sideNavigation.module.scss";

const SideNavigation = () => {
  const activePage = useAppSelector(selectActivePage);
  const dispatch = useAppDispatch();

  const getLinkClassName = (title: NavigationItem["title"]): string =>
    pipe(
      [styles.listItem, activePage === title ? styles.listItemActive : ""],
      Array.join(" ")
    );

  const getListItemText = (title: NavigationItem["title"]): string =>
    pipe(title, String.toLowerCase, String.capitalize);

  return (
    <Paper className={styles.paper} shadow="xl" radius="xl" padding={Padding.M}>
      <Title order={3}>
        <ThemeIcon variant="white">
          <IconChartDonut2 />
        </ThemeIcon>
        Finarium
      </Title>
      <List className={styles.list} component="nav">
        {pipe(
          NAVIGATION_ITEMS,
          Array.map(({ title, icon }) => (
            <Link
              key={title}
              href={`/${title.toLocaleLowerCase()}`}
              className={getLinkClassName(title)}
              onClick={() => dispatch(set(title))}
            >
              <List.Item
                icon={
                  <ThemeIcon
                    variant="white"
                    classNames={{ root: styles.themeIcon }}
                  >
                    {icon}
                  </ThemeIcon>
                }
              >
                {getListItemText(title)}
              </List.Item>
            </Link>
          ))
        )}
      </List>
    </Paper>
  );
};

export default SideNavigation;
