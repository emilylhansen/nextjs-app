import Paper from "@/components/core/Paper/Paper";
import { Cards } from "@/components/layout/Cards/Cards";
import { Receivers } from "@/components/layout/Receivers/Receivers";
import { RecentActivity } from "@/components/layout/RecentActivity/RecentActivity";
import { Padding } from "@/styles/spacing.types";
import { Avatar, Badge, Group } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";
import styles from "./sidebar.module.scss";

export const Sidebar = () => {
  return (
    <Paper className={styles.paper} padding={Padding.M}>
      <div className={styles.topWrapper}>
        <Group justify="center">
          {/* <HoverCard
            width={320}
            shadow="md"
            withArrow
            openDelay={200}
            closeDelay={400}
          >
            <HoverCard.Target>
              <Group>
                <Badge
                  size="xl"
                  variant="outline"
                  leftSection={<IconBell />}
                  color="gray"
                  classNames={{ label: styles.badgeLabel }}
                >
                  28
                </Badge>
              </Group>
            </HoverCard.Target>
            <HoverCard.Dropdown>dfdf</HoverCard.Dropdown>
          </HoverCard> */}
        </Group>

        <Avatar alt="Person 1" src="/assets/person_1.png" />
      </div>

      <div className={styles.cards}>
        <Cards />
      </div>
      <div className={styles.receivers}>
        <Receivers users={[]} />
      </div>
      <div className={styles.recentActivity}>
        <RecentActivity />
      </div>
    </Paper>
  );
};
