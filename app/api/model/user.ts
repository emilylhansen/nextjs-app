import { Schema } from "@effect/schema";
import { Data, pipe } from "effect";
import type { ParseResult } from "@effect/schema";

const getUserId = ({ actual }: ParseResult.ParseIssue) => {
  if (Schema.is(User)(actual)) {
    return `User with id: ${actual.id}`;
  }
};

export const User = Schema.Struct({
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
  identifier: "User",
  parseIssueTitle: getUserId,
});

export type User = typeof User.Type;
export const isUser = Schema.is(User);

export class GetUsersError extends Data.TaggedError("GetUsers")<{
  message: string;
}> {}
