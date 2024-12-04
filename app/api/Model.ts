import { Schema } from "@effect/schema";
import { Data, pipe } from "effect";
import type { ParseResult } from "@effect/schema";

const getUserSId = ({ actual }: ParseResult.ParseIssue) => {
  if (Schema.is(UserS)(actual)) {
    return `User with id: ${actual.id}`;
  }
};

export const UserS = Schema.Struct({
  id: Schema.Number,
  name: pipe(Schema.String, Schema.nonEmpty()),
  username: pipe(Schema.String, Schema.nonEmpty()),
  email: pipe(Schema.String, Schema.nonEmpty()),
  address: Schema.Struct({
    street: pipe(Schema.String, Schema.nonEmpty()),
    suite: pipe(Schema.String, Schema.nonEmpty()),
    city: pipe(Schema.String, Schema.nonEmpty()),
    zipcode: pipe(Schema.String, Schema.nonEmpty()),
    geo: Schema.Struct({
      lat: pipe(Schema.String, Schema.nonEmpty()),
      lng: pipe(Schema.String, Schema.nonEmpty()),
    }),
  }),
  phone: pipe(Schema.String, Schema.nonEmpty()),
  website: pipe(Schema.String, Schema.nonEmpty()),
  company: Schema.Struct({
    name: pipe(Schema.String, Schema.nonEmpty()),
    catchPhrase: pipe(Schema.String, Schema.nonEmpty()),
    bs: pipe(Schema.String, Schema.nonEmpty()),
  }),
}).annotations({
  identifier: "UserS",
  parseIssueTitle: getUserSId,
});

export type UserS = Schema.Schema.Type<typeof UserS>;

export const isUserS = Schema.is(UserS);

export interface User {
  _tag: "User";
  id: 1;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export class GetUsersError {
  _tag = "GetUsersError";
}

export class GetUserByIdError {
  _tag = "GetUserByIdError";
}

export const TransactionType = Schema.Enums({
  Expenses: "expenses",
  Refund: "refund",
  Deposit: "deposit",
});
export type TransactionType = Schema.Schema.Type<typeof TransactionType>;

export const Category = Schema.Enums({
  Income: "income",
  Groceries: "groceries",
  Utilities: "utilities",
  Entertainment: "entertainment",
  Rent: "rent",
  Transportation: "transportation",
  Insurance: "insurance",
  Investment: "investment",
  Savings: "savings",
  Debt: "debt",
  Other: "other",
});

export type Category = Schema.Schema.Type<typeof Category>;

export const Transaction = Schema.Struct({
  id: pipe(Schema.String, Schema.nonEmpty()),
  date: pipe(Schema.Date, Schema.nonEmpty()),
  description: Schema.String,
  amount: Schema.Number,
  storeName: pipe(Schema.String, Schema.nonEmpty()),
  transactionType: TransactionType,
  category: Category,
  userId: pipe(Schema.String, Schema.nonEmpty()),
});
export type Transaction = Schema.Schema.Type<typeof Transaction>;
type TransactionEncoded = Schema.Schema.Encoded<typeof Transaction>;
type TransactionContext = Schema.Schema.Context<typeof Transaction>;

// export class GetTransactionsError {
//   readonly _tag = "GetTransactionsError";
// }
export class GetTransactionsError extends Data.TaggedError("GetTransactions")<{
  message: string;
}> {}

export const APIStatus = Schema.Literal(
  "idle",
  "pending",
  "rejected",
  "fulfilled"
);

export const APIInfo = <ErrorType = any, DataType = any>(
  errorType: Schema.Schema<ErrorType>,
  dataType: Schema.Schema<DataType>
) =>
  Schema.Struct({
    status: APIStatus,
    error: Schema.Option(errorType),
    data: Schema.Option(dataType),
    // error: APIError<ErrorType>(errorType),
    // data: APIData<DataType>(dataType),
    lastUpdated: Schema.Date,
  });
