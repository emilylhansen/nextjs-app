import { Schema } from "@effect/schema";
import { pipe } from "effect";
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

export interface Todo {
  _tag: "Todo";
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export class GetTodosError {
  _tag = "GetTodosError";
}
