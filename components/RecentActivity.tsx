import RecentActivityItem from "@/components/RecentActivityItem";
import Link from "next/link";
import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Schema } from "@effect/schema";
import { Array, Effect, Schedule, Option, pipe } from "effect";
import { TimeoutException } from "effect/Cause";
import { ParseError } from "@effect/schema/ParseResult";
import { Train_One } from "next/font/google";

class GetTransactionsError {
  readonly "_tag": "GetTransactionsError";
}
export const Transaction = Schema.Struct({
  id: Schema.String.pipe(Schema.nonEmpty()),
  type: Schema.String.pipe(Schema.nonEmpty()),
  value: Schema.String.pipe(Schema.nonEmpty()),
  createdAt: Schema.Date,
  updatedAt: Schema.Date,
}).annotations({
  identifier: "Transaction",
  // parseIssueTitle: getTransactionId,
});
const Transactions = Schema.Array(Transaction);
type Transactions = Schema.Schema.Type<typeof Transactions>;

export const RecentActivity = ({
  transactions,
}: {
  transactions: Effect.Effect<
    Transactions,
    GetTransactionsError | TimeoutException | ParseError
  >;
}) => {
  if (Effect.isFailure(transactions)) {
    debugger;
  }

  return (
    <React.Fragment>
      <h3 className="font-bold mb-4">Recent Activity</h3>
      <ul className="flex-1">
        {Effect.isFailure(transactions) ? (
          <Skeleton>failure</Skeleton>
        ) : (
          <>success</>
          // pipe(
          //   transactions,
          //   Array.take(4),
          //   Array.map((transaction) => pipe(trains
          //     <RecentActivityItem
          //       key={transaction.id}
          //       value={transaction.value}
          //     />
          //   ))
          // )
        )}

        <li>
          <Link href={`/transactions`} className="text-blue-400">
            See all activity
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};
