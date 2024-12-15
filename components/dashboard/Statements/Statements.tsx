"use client";
import Paper from "@/components/core/Paper/Paper";
import Row from "@/components/dashboard/Statements/Row";
import { TransactionsArray } from "@/lib/features/transactions/transactionsTypes";
import { Padding } from "@/styles/spacing.types";
import { Table } from "@mantine/core";
import { Array, pipe } from "effect";
import styles from "./statements.module.scss";

type Props = {
  transactions: TransactionsArray;
};

const Statements = ({ transactions }: Props) => {
  return (
    <Paper className={styles.paper} shadow="xl" radius="xl" padding={Padding.M}>
      <div className={styles.tableWrapper}>
        <Table
          className={styles.table}
          summary="Statement's table"
          striped
          withRowBorders={false}
        >
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
