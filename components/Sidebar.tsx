import React from "react";
import Paper from "@mui/material/Paper";
import prisma from "@/db";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import IconButton from "@mui/material/IconButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Chip from "@mui/material/Chip";
import Link from "next/link";
import * as A from "fp-ts/Array";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Receivers } from "@/components/Receivers";
import { Cards } from "@/components/Cards";
import { RecentActivity } from "@/components/RecentActivity";
import { HttpClient } from "@effect/platform";
import { Schema } from "@effect/schema";
import {
  Array,
  Effect,
  Schedule,
  Option,
  pipe,
  Request,
  RequestResolver,
} from "effect";
import { TimeoutException } from "effect/Cause";
import { ParseError } from "@effect/schema/ParseResult";

const retryPolicy = Schedule.exponential(1000).pipe(
  Schedule.compose(Schedule.recurs(3))
);

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

// const httpCall = (id: number) =>
//   HttpClient.request
//     .get(`/todos/${id}`)
//     .pipe(HttpClient.client.fetchOk, HttpClient.response.json);

// class Todo extends Schema.Class<Todo>("Todo")({
//   id: Schema.Number,
//   userId: Schema.Number,
//   title: Schema.String,
//   completed: Schema.Boolean,
// }) {}
// const getTransactions = () => prisma.transaction.findMany();

const Transactions = Schema.Array(Transaction);
type Transactions = Schema.Schema.Type<typeof Transactions>;

class GetTransactionsError {
  readonly "_tag": "GetTransactionsError";
}

class BarError {
  readonly "_tag": "BarError";
}

// Fetches a list of todos from an external API
export const getTransactions = Effect.tryPromise({
  try: () => prisma.transaction.findMany(),
  catch: () => new GetTransactionsError(),
});

type TransactionT = Schema.Schema.Type<typeof Transaction>;

// Define a request to get multiple Transaction items which might fail with a GetTransactionsError
export interface GetTransactions
  extends Request.Request<Array<TransactionT>, GetTransactionsError> {
  readonly _tag: "GetTransactions";
}

// Create a tagged constructor for GetTransactions requests
export const GetTransactions =
  Request.tagged<GetTransactions>("GetTransactions");

// Combine all requests into a union type for easier management
export type ApiRequest = GetTransactions;

// Assuming GetTransactions cannot be batched, we create a standard resolver.
export const GetTransactionsResolver = RequestResolver.fromEffect(
  (request: GetTransactions) => getTransactions
);

// Defines a query to fetch all Todo items
export const getTransactions_: Effect.Effect<
  Array<TransactionT>,
  GetTransactionsError
> = Effect.request(GetTransactions({}), GetTransactionsResolver); // Defines a query to fetch all Todo items

export const Sidebar = async () => {
  // const transaction = prisma.transaction.findMany();

  // const transactions: Effect.Effect<
  //   Transactions,
  //   GetTransactionsError | TimeoutException | ParseError
  // > = pipe(
  //   getTransactions_,
  //   Effect.timeout("1 second"),
  //   Effect.retry(retryPolicy),
  //   Effect.flatMap(Schema.decodeUnknown(Schema.Array(Transaction)))
  //   // Effect.option,
  //   // Effect.runSync
  //   // Effect.withSpan("getTransactions", { attributes: {} }),
  //   // Effect.matchEffect({
  //   //   onFailure: () => Effect.fail("failed"),
  //   //   onSuccess: (ts) => Effect.succeed(ts),
  //   // })
  //   // Effect.runSync
  //   // Effect.catchTags({
  //   //   FooError: (_fooError) => Effect.succeed(`Recovering from FooError`),
  //   //   BarError: (_barError) => Effect.succeed(`Recovering from BarError`),
  //   // })
  // );

  return (
    <Paper className="h-full px-8 py-8 overflow-hidden flex flex-col bg-white/[0.5]">
      <div className="flex justify-between items-center mb-8">
        <IconButton
          aria-label={""}
          className="border-solid border-2 border-slate-200"
        >
          <Badge badgeContent={20} color="primary">
            <NotificationsNoneOutlinedIcon color="action" />
          </Badge>
        </IconButton>
        <Avatar alt="Person 1" src="/assets/person_1.png" />
      </div>

      <Cards />
      <Receivers users={[]} />
      {/* <RecentActivity transactions={transactions} /> */}
    </Paper>
  );
};
