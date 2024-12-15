import { Schema } from "@effect/schema";
import { Data, pipe } from "effect";

export const TransactionType = Schema.Literal("expenses", "refund", "deposit");
export type TransactionType = Schema.Schema.Type<typeof TransactionType>;

export const Category = Schema.Literal(
  "income",
  "groceries",
  "utilities",
  "entertainment",
  "rent",
  "transportation",
  "insurance",
  "investment",
  "savings",
  "debt",
  "other"
);

export const Transaction = Schema.Struct({
  id: pipe(Schema.String, Schema.nonEmpty()),
  date: Schema.Date,
  description: Schema.String,
  amount: Schema.Number,
  storeName: pipe(Schema.String, Schema.nonEmpty()),
  transactionType: TransactionType,
  category: Category,
  userId: pipe(Schema.String, Schema.nonEmpty()),
});

export type Transaction = Schema.Schema.Type<typeof Transaction>;

export type TransactionEncoded = Schema.Schema.Encoded<typeof Transaction>;

export type TransactionContext = Schema.Schema.Context<typeof Transaction>;

export class GetTransactionsError extends Data.TaggedError("GetTransactions")<{
  message: string;
}> {}
