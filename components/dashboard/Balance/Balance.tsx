import Paper from "@/components/core/Paper/Paper";
import styles from "./Balance.module.scss";
import { Text, Pill } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";

type Props = { balance: number };

export const Balance = ({ balance }: Props) => {
  return (
    <Paper className={styles.paper} shadow="xl" radius="xl">
      <Text size="sm" fw={700}>
        Total Balance
      </Text>
      <div className={styles.balanceWrapper}>
        <Text size="sm" fw={700}>
          $
        </Text>
        <Text size="sm" fw={700} className={styles.balance}>
          {balance}
        </Text>
      </div>
      <Pill className={styles.pill}>
        <IconArrowUp size={12} stroke={3} />
        3.6%
      </Pill>
    </Paper>
  );
};
