"use client";
import { useAppDispatch } from "@/app/hooks";
import { getUsers } from "@/lib/features/users/usersActions";
import { getUsersData } from "@/lib/features/users/usersSelectors";
import { ActionIcon, Avatar, Badge, Group, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { Array, Option, pipe } from "effect";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./receivers.module.scss";

type Props = {};

export const Receivers = (props: Props) => {
  const dispatch = useAppDispatch();
  const usersO = useSelector(getUsersData);
  const users = pipe(
    usersO,
    Option.getOrElse(() => [])
  );

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Title order={5} fw="bold" className={styles.title}>
        Receivers
        <Badge className={styles.badge} size="md" color="primary.3">
          {users.length}
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
          users,
          Array.map((user, index) => (
            <Avatar
              key={user.id}
              alt={user.name}
              src={`/assets/person_${(index % 6) + 1}.png`}
              title={user.name}
            />
          ))
        )}
      </Group>
    </React.Fragment>
  );
};
