"use client";
import { Balance } from "@/components/Balance";
import { Expenses } from "@/components/Expenses";
import { TransactionsOverview } from "@/components/TransactionsOverview";
import React from "react";
import { Effect, Schedule, pipe, Array } from "effect";
import * as API from "@/app/api/API";
// import * as Queries from "@/app/api/Queries";
import { Schema } from "@effect/schema";
import * as Model from "@/app/api/Model";

// const retryPolicy = Schedule.exponential(1000).pipe(
//   Schedule.compose(Schedule.recurs(3))
// );

const a = async () =>
  await pipe(
    API.getTodos,
    // Effect.timeout("1 second"),
    // Effect.retry(retryPolicy),
    // Effect.tap((res) => console.log(pipe(res, Array.takeRight(3)))),
    Effect.runPromise
  );
const b = async () =>
  await pipe(
    [1, 2, 300],
    Effect.forEach((id) => API.getUserById(id)),
    Effect.tap((res) => console.log(pipe(res, Array.takeRight(3)))),
    // Effect.timeout("1 second"),
    // Effect.retry(retryPolicy),
    Effect.flatMap(
      Schema.decodeUnknown(Schema.Array(Model.UserS), {
        onExcessProperty: "error",
        errors: "all",
        exact: true,
      })
    ),
    // Effect.withSpan("getUserById", { attributes: {} }),
    // Effect.catchTags({
    // ParseError: (_parseError) => Effect.succeed(`Recovering from ParseError`),
    // BarError: (_barError) => Effect.succeed(`Recovering from BarError`),
    // }),
    // Effect.catchAll((error) => Effect.succeed(`Recovering from ${error._tag}`)),
    Effect.runPromise
  );
const page = () => {
  console.log({ b: b() });
  // console.log({ a: pipe(a, Array.takeRight(3)), b });

  // throw new Error("error in overview page");

  return (
    <React.Fragment>
      <div className="col-span-3 row-span-3 col-start-3 row-start-3 pl-6">
        <Balance />
      </div>
      <div className="col-span-4 row-span-3 col-start-6 row-start-3 pr-6">
        <Expenses />
      </div>
      <div className="col-span-7 row-span-3 col-start-3 row-start-6 pb-4 px-6">
        <TransactionsOverview />
      </div>
    </React.Fragment>
  );
};

export default page;
