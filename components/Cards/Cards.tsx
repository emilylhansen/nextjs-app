"use client";
import { Card } from "@/components/Card/Card";
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
      <div className="flex flex-col-reverse mb-8">
        <div className="-mt-[150px] w-[80%] mx-auto from-indigo-400/[0.25] to-fuchsia-400/[0.25]">
          <Card />
        </div>
        <div className="-mt-[150px] w-[90%] mx-auto from-indigo-400/[0.5] to-fuchsia-400/[0.5]">
          <Card />
        </div>
        <div className="from-indigo-400 to-fuchsia-400">
          <Card />
        </div>
      </div>
      <Modal opened={opened} onClose={close} title="Add Card" centered>
        {/* Modal content */}
      </Modal>
    </React.Fragment>
  );
};
