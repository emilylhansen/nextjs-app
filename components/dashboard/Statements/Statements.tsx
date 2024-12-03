"use client";
import Paper from "@/components/core/Paper/Paper";
import { Padding } from "@/styles/spacing.types";
import React from "react";
import { Table } from "@mantine/core";
import { Array, Effect, pipe } from "effect";
import styles from "./statements.module.scss";

const elements = pipe(
  Array.range(1, 10),
  Array.map((i) => ({
    storeName: "store name",
    description: "sdjf skjdflskjf dsf",
    date: "12-2-24",
    category: "Shopping",
    amount: "123.23",
  }))
);
const rows = elements.map((element, i) => (
  <Table.Tr key={i}>
    <Table.Td>{element.storeName}</Table.Td>
    <Table.Td>{element.description}</Table.Td>
    <Table.Td>{element.date}</Table.Td>
    <Table.Td>{element.category}</Table.Td>
    <Table.Td>{element.amount}</Table.Td>
  </Table.Tr>
));

const Statements = () => {
  return (
    <React.Fragment>
      <div className={styles.paper}>
        <Paper shadow="xl" radius="xl" padding={Padding.M}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Store</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Date</Table.Th>
                <Table.Th>Category</Table.Th>
                <Table.Th>Amount</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default Statements;
