"use client";
import { Card } from "@/components/dashboard/Card/Card";
import { ActionIcon, Modal, Pill, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSquarePlus } from "@tabler/icons-react";
import React from "react";
import styles from "./cards.module.scss";

export const Cards = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <React.Fragment>
      <div className={styles.topWrapper}>
        <Title order={5} fw="bold" className={styles.title}>
          Your cards <Pill className={styles.pill}>6</Pill>
        </Title>
        <ActionIcon size="md" variant="transparent" color="gray" onClick={open}>
          <IconSquarePlus stroke={3} />
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
