import { Balance } from "@/components/Balance";
import { Expenses } from "@/components/Expenses";
import { TransactionsOverview } from "@/components/TransactionsOverview";
import React from "react";

const page = () => {
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
