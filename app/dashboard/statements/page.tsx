"use client";
import { useAppDispatch } from "@/app/hooks";
import Statements from "@/components/dashboard/Statements/Statements";
import { getTransactions } from "@/lib/features/transactions/transactionsActions";
import { getTransactionsData } from "@/lib/features/transactions/transactionsSelectors";
import { pipe, Option } from "effect";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./page.module.scss";

const page = () => {
  const dispatch = useAppDispatch();
  const transactions = useSelector(getTransactionsData);

  React.useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div className={`grid-body ${styles.container}`}>
      <Statements
        transactions={pipe(
          transactions,
          Option.getOrElse(() => [])
        )}
      />
    </div>
  );
};

export default page;
