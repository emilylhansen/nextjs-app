import RecentActivityItem from "@/components/RecentActivityItem";
import { Transaction } from "@prisma/client";
import * as A from "fp-ts/Array";
import { pipe } from "fp-ts/lib/function";
import Link from "next/link";
import React from "react";

export const RecentActivity = ({
  transactions,
}: {
  transactions: Array<Transaction>;
}) => {
  return (
    <React.Fragment>
      <h3 className="font-bold mb-4">Recent Activity</h3>
      <ul className="flex-1">
        {pipe(
          transactions,
          A.takeLeft(4),
          A.map((transaction) => (
            <RecentActivityItem
              key={transaction.id}
              value={transaction.value}
            />
          ))
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
