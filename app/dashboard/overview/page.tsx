"use client";
import { Balance } from "@/components/dashboard/Balance/Balance";
import { Expenses } from "@/components/dashboard/Expenses/Expenses";
import { TransactionsOverview } from "@/components/dashboard/TransactionsOverview/TransactionsOverview";
import React from "react";
import { Effect, Schedule, pipe, Array, Option } from "effect";
import * as API from "@/app/api/API";
// import * as Queries from "@/app/api/Queries";
import { Schema } from "@effect/schema";
import * as Model from "@/app/api/Model";
import { HttpClient } from "@effect/platform";

import { ErrorBoundary } from "react-error-boundary";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

function fallbackRender({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

const Page = () => {
  return (
    <ErrorBoundary
      fallbackRender={fallbackRender}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      <React.Fragment>
        <div className="col-span-3 row-span-3 col-start-3 row-start-3 pl-6">
          <Balance balance={10000} />
        </div>
        <div className="col-span-4 row-span-3 col-start-6 row-start-3 pr-6">
          <Expenses />
        </div>
        <div className="col-span-7 row-span-3 col-start-3 row-start-6 pb-4 px-6">
          <TransactionsOverview />
        </div>
      </React.Fragment>
    </ErrorBoundary>
  );
};

export default Page;
