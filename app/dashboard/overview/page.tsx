"use client";
import { Balance } from "@/components/dashboard/Balance/Balance";
import { Expenses } from "@/components/dashboard/Expenses/Expenses";
import { TransactionsOverview } from "@/components/dashboard/TransactionsOverview/TransactionsOverview";
import React from "react";
import styles from "./overview.module.scss";
// import * as Queries from "@/app/api/Queries";

import { ErrorBoundary } from "react-error-boundary";

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
        <div className={styles.balance}>
          <Balance balance={12345} />
        </div>
        <div className={styles.expenses}>
          <Expenses />
        </div>
        <div className={styles.transactionsOveriew}>
          <TransactionsOverview />
        </div>
      </React.Fragment>
    </ErrorBoundary>
  );
};

export default Page;
