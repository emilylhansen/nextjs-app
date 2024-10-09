"use client";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Paper from "@/components/Paper/Paper";
import { NAVIGATION_ITEMS } from "@/components/SideNavigation/sideNavigation.constants";
import {
  selectActivePage,
  set,
} from "@/lib/features/navigation/navigationSlice";
import { List, ThemeIcon, Title } from "@mantine/core";
import { IconChartDonut2 } from "@tabler/icons-react";
import * as A from "fp-ts/Array";
import { pipe } from "fp-ts/function";
import _ from "lodash";
import Link from "next/link";
import styles from "./sideNavigation.module.scss";

const SideNavigation = () => {
  const activePage = useAppSelector(selectActivePage);
  const dispatch = useAppDispatch();

  return (
    <Paper className={styles.paper} shadow="xl" radius="xl" p="xl">
      <Title order={3}>
        <ThemeIcon variant="white">
          <IconChartDonut2 />
        </ThemeIcon>
        Finarium
      </Title>
      <List className={styles.list} component="nav">
        {pipe(
          NAVIGATION_ITEMS,
          A.map((navigationItem) => (
            <Link
              key={navigationItem.title}
              href={`/${navigationItem.title.toLocaleLowerCase()}`}
              className={`${styles.listItem} ${
                activePage === navigationItem.title ? styles.listItemActive : ""
              }`}
              onClick={() => dispatch(set(navigationItem.title))}
            >
              <List.Item
                icon={
                  <ThemeIcon
                    variant="white"
                    classNames={{ root: styles.themeIcon }}
                  >
                    {navigationItem.icon}
                  </ThemeIcon>
                }
              >
                {_.capitalize(navigationItem.title)}
              </List.Item>
            </Link>
          ))
        )}
      </List>
    </Paper>
  );
};

export default SideNavigation;
