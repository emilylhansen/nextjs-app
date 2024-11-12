import SideNavigation from "@/components/layout/SideNavigation/SideNavigation";
import { Sidebar } from "@/components/layout/Sidebar/Sidebar";
import React from "react";
import styles from "./grid.module.scss";

type Props = { children?: React.ReactNode };

export const Grid = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.sideNavigation}>
        <SideNavigation />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      {children}
    </div>
  );
};
