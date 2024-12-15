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
      <Title className={styles.title} order={5} fw="bold">
        Receivers
        <Badge
          className={styles.badge}
          aria-label={`There are ${users.length} recievers available`}
          size="md"
          color="primary.3"
        >
          {users.length}
        </Badge>
      </Title>

      <Group
        classNames={{ root: styles.group }}
        aria-label="List of available recievers"
      >
        <ActionIcon
          classNames={{ root: styles.actionIcon }}
          aria-label="Add reciever"
          variant="outline"
          radius="lg"
          size="lg"
          color="gray"
        >
          <IconPlus stroke={3} />
        </ActionIcon>
        {pipe(
          users,
          Array.map((user, index) => (
            <Avatar
              key={user.id}
              alt={`Reciever: ${user.name}`}
              src={`/assets/person_${(index % 6) + 1}.png`}
              title={user.name}
            />
          ))
        )}
      </Group>
    </React.Fragment>
  );
};
