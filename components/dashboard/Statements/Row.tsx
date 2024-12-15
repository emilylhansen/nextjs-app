"use client";
import { Transaction } from "@/app/api/model/transaction";
import { Schema } from "@effect/schema";
import { Table } from "@mantine/core";
import { String } from "effect";

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

export default Row;
