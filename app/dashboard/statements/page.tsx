"use client";
import { useAppDispatch } from "@/app/hooks";
import Statements from "@/components/dashboard/Statements/Statements";
import {
  getTransactions,
  getTransactionsData,
} from "@/lib/features/transactions/transactionsSlice";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const dispatch = useAppDispatch();
  const ts = useSelector(getTransactionsData);
  console.log({ ts });

  React.useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return <Statements />;
};

export default page;
