import { Text } from "@mantine/core";
import styles from "./card.module.scss";
import { IconCircleFilled } from "@tabler/icons-react";
import { pipe, Array } from "effect";
import Paper from "@/components/core/Paper/Paper";

type Props = {
  className?: string;
};

export const Card = ({ className = "" }: Props) => {
  return (
    <Paper
      shadow="xl"
      radius="xl"
      className={pipe([styles.paper, className], Array.join(" "))}
    >
      <div className={styles.topWrapper}>
        <div className={styles.circlesWrapper}>
          <IconCircleFilled className={styles.circle1} />
          <IconCircleFilled className={styles.circle2} />
        </div>
        <Text size="xs">Debit</Text>
      </div>
      <div className={styles.totalWrapper}>
        <Text size="xs">$</Text>
        <Text size="4xl" className={styles.total}>
          6,544
        </Text>
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
          <Text size="xs">2341</Text>
        </div>
        <Text size="xs">04/28</Text>
      </div>
    </Paper>
  );
};
