import { Schema } from "@effect/schema";
import { ParseError } from "@effect/schema/ParseResult";
import { Title } from "@mantine/core";
import { Effect } from "effect";
import { TimeoutException } from "effect/Cause";
import React from "react";
import styles from "./recentActivity.module.scss";

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

type Props = {
  transactions: Effect.Effect<
    Transactions,
    GetTransactionsError | TimeoutException | ParseError
  >;
};

export const RecentActivity = () => {
  // if (Effect.isFailure(transactions)) {
  //   debugger;
  // }

  return (
    <React.Fragment>
      <Title order={5} fw="bold" className={styles.title}>
        Recent Activity
      </Title>

      {/* <ul className="flex-1">
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
      </ul> */}
    </React.Fragment>
  );
};
