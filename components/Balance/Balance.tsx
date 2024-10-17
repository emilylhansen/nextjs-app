import Paper from "@/components/Paper/Paper";
import styles from "./Balance.module.scss";
import { Text, Chip } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";

type Props = { balance: number };

export const Balance = ({ balance }: Props) => {
  return (
    <Paper className={styles.paper} shadow="xl" radius="xl">
      <Text size="sm" fw={700}>
        Total Balance
      </Text>
      <div className={styles.wrapper}>
        <Text size="sm" fw={700}>
          $
        </Text>
        <Text size="sm" fw={700} className={styles.balance}>
          {balance}
        </Text>
      </div>
      <Chip icon={<IconArrowUp />} color="green" variant="light" defaultChecked>
        3.6%
      </Chip>
    </Paper>
  );
};
