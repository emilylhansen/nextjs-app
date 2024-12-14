"use client";
import { Category, Transaction, TransactionType } from "@/app/api/Model";
import Paper from "@/components/core/Paper/Paper";
import { TransactionsArray } from "@/lib/features/transactions/transactionsTypes";
import { Padding } from "@/styles/spacing.types";
import { Table } from "@mantine/core";
import { Array, pipe, String } from "effect";
import React from "react";
import styles from "./statements.module.scss";
import { Schema } from "@effect/schema";

const Row = ({ transaction }: { transaction: Transaction }) => {
  const { storeName, description, date, category, amount } = transaction;

  const decodeToDate = Schema.decodeUnknownSync(Schema.Date);
  const dateDecoded = decodeToDate(date);
  const formattedDate = dateDecoded.toLocaleDateString("en-US");

  const formattedCategory = String.capitalize(category);

  return (
    <Table.Tr>
      <Table.Td>{storeName}</Table.Td>
      <Table.Td>{description}</Table.Td>
      <Table.Td>{formattedDate}</Table.Td>
      <Table.Td className={category}>{formattedCategory}</Table.Td>
      <Table.Td>{amount}</Table.Td>
    </Table.Tr>
  );
};

type Props = {
  transactions: TransactionsArray;
};

const Statements = ({ transactions }: Props) => {
  return (
    <Paper shadow="xl" radius="xl" padding={Padding.M} className={styles.paper}>
      <div className={styles.tableWrapper}>
        <Table striped withRowBorders={false} className={styles.table}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Store</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Category</Table.Th>
              <Table.Th>Amount</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody className={styles.body}>
            {pipe(
              transactions,
              Array.map((transaction) => (
                <Row key={transaction.id} transaction={transaction} />
              ))
            )}
          </Table.Tbody>
        </Table>
      </div>
    </Paper>
  );
};

export default Statements;
