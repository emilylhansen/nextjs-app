import Paper from "@/components/core/Paper/Paper";
import styles from "./Balance.module.scss";
import { Title, Text, Badge } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";

type Props = { balance: number };

export const Balance = ({ balance }: Props) => {
  return (
    <Paper className={styles.paper} shadow="xl" radius="xl">
      <Title order={5} fw="bold" className={styles.title}>
        Total Balance
      </Title>
      <div className={styles.balanceWrapper}>
        <Text size="sm" fw={700}>
          $
        </Text>
        <Text size="sm" fw={700} className={styles.balance}>
          {balance}
        </Text>
      </div>
      <Badge
        className={styles.badge}
        leftSection={<IconArrowUp size={12} stroke={3} />}
      >
        3.6%
      </Badge>
    </Paper>
  );
};
