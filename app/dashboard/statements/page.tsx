"use client";
import Statements from "@/components/dashboard/Statements/Statements";
import { Effect } from "effect";
import React from "react";
import * as transactions from "../../api/transactions/route";
import {
  getTransactions,
  getTransactions_,
} from "@/lib/features/transactions/transactionsSlice";
import { useAppDispatch } from "@/app/hooks";
import { useSelector } from "react-redux";

const page = () => {
  const dispatch = useAppDispatch();
  const ts = useSelector(getTransactions);
  console.log({ ts });

  React.useEffect(() => {
    dispatch(getTransactions_());

    // const a = Effect.runPromiseExit(transactions.GET_effect).then(console.log);
  }, [dispatch]);

  return <Statements />;
};

export default page;
