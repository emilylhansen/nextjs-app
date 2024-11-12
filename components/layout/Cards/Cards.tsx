"use client";
import { Card } from "@/components/layout/Card/Card";
import { ActionIcon, Modal, Badge, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import React from "react";
import styles from "./cards.module.scss";

export const Cards = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <React.Fragment>
      <div className={styles.topWrapper}>
        <Title order={5} fw="bold" className={styles.title}>
          Your cards
          <Badge className={styles.badge} size="md" color="primary.3">
            6
          </Badge>
        </Title>
        <ActionIcon
          variant="outline"
          aria-label="Add"
          radius="sm"
          color="gray"
          size="sm"
          onClick={open}
        >
          <IconPlus stroke={3} />
        </ActionIcon>
      </div>
      <div className={styles.cardsWrapper}>
        <Card className={styles.cardA} />
        <Card className={styles.cardB} />
        <Card />
      </div>
      <Modal opened={opened} onClose={close} title="Add Card" centered>
        {/* Modal content */}
      </Modal>
    </React.Fragment>
  );
};
