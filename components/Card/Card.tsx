import { Paper } from "@mantine/core";
import styles from "./card.module.scss";
import { IconCircleFilled } from "@tabler/icons-react";
import { pipe, Array } from "effect";

export const Card = () => {
  return (
    <Paper shadow="xl" radius="xl" className={styles.paper}>
      <div className={styles.topWrapper}>
        <div className={styles.circlesWrapper}>
          <IconCircleFilled className={styles.circle1} />
          <IconCircleFilled className={styles.circle2} />
        </div>
        <span>Debit</span>
      </div>
      <div className={styles.totalWrapper}>
        <span>$</span>
        <span className={styles.total}>6,544</span>
      </div>
      <div className={styles.numberDateWrapper}>
        <div className={styles.numberWrapper}>
          <div className={styles.hiddenNumbersWrapper}>
            {pipe(
              Array.range(0, 3),
              Array.map((i) => (
                <IconCircleFilled
                  key={i}
                  className={styles.hiddenNumber}
                  size={6}
                />
              ))
            )}
          </div>
          <span>2341</span>
        </div>
        <span>04/28</span>
      </div>
    </Paper>
  );
};
