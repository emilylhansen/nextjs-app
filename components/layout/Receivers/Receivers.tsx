"use client";
import { UserS } from "@/app/api/Model";
import { ActionIcon, Avatar, Badge, Group, Title } from "@mantine/core";
import React from "react";
// import { User } from "@prisma/client";
import { IconPlus } from "@tabler/icons-react";
import { Array, pipe } from "effect";
import styles from "./receivers.module.scss";

export const Receivers = ({ users }: { users: Array<UserS> }) => {
  return (
    <React.Fragment>
      <Title order={5} fw="bold" className={styles.title}>
        Receivers
        <Badge className={styles.badge} size="md" color="primary.3">
          22
        </Badge>
      </Title>

      <Group classNames={{ root: styles.group }}>
        <ActionIcon
          variant="outline"
          aria-label="Add"
          radius="lg"
          size="lg"
          color="gray"
          classNames={{ root: styles.actionIcon }}
        >
          <IconPlus stroke={3} />
        </ActionIcon>
        {pipe(
          Array.range(1, 6),
          Array.map((i) => (
            <Avatar
              key={i}
              alt={String(i)}
              src={`/assets/person_${i}.png`}
              title={String(i)}
            />
          ))
        )}
      </Group>
    </React.Fragment>
  );
};
