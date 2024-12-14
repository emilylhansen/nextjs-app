import { Schema } from "@effect/schema";
import * as Model from "../../../app/api/Model";
import { APIInfo } from "@/lib/features/featuresTypes";

export const TransactionsArray = Schema.Array(Model.Transaction);
export type TransactionsArray = typeof TransactionsArray.Type;

export const Transactions = APIInfo<string, TransactionsArray>(
  Schema.String,
  TransactionsArray
).pipe(Schema.brand("Transactions"));
export type Transactions = typeof Transactions.Type;
