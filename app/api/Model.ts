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

export interface User {
  readonly _tag: "User";
  readonly id: 1;
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly address: {
    readonly street: string;
    readonly suite: string;
    readonly city: string;
    readonly zipcode: string;
    readonly geo: {
      readonly lat: string;
      readonly lng: string;
    };
  };
  readonly phone: string;
  readonly website: string;
  readonly company: {
    readonly name: string;
    readonly catchPhrase: string;
    readonly bs: string;
  };
}

export class GetUsersError {
  readonly _tag = "GetUsersError";
}

export class GetUserByIdError {
  readonly _tag = "GetUserByIdError";
}

export interface Todo {
  readonly _tag: "Todo";
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly completed: boolean;
}
export class GetTodosError {
  readonly _tag = "GetTodosError";
}
