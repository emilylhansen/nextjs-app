import { Schema } from "@effect/schema";
import { Transaction } from "../../../app/api/model/transaction";
import { APIInfo } from "@/lib/features/featuresTypes";

export const TransactionsArray = Schema.Array(Transaction);
export type TransactionsArray = typeof TransactionsArray.Type;

export const Transactions = APIInfo<string, TransactionsArray>(
  Schema.String,
  TransactionsArray
).pipe(Schema.brand("Transactions"));
export type Transactions = typeof Transactions.Type;
