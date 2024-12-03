import { Skeleton } from "@mantine/core";
import React from "react";
import styles from "./loading.module.scss";

export const Loading = () => {
  return (
    <React.Fragment>
      <Skeleton className={styles.skeleton1} />
      <Skeleton className={styles.skeleton2} />
      <Skeleton className={styles.skeleton3} />
    </React.Fragment>
  );
};
