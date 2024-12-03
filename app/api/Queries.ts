import { Effect } from "effect";
import * as Model from "./Model";
import * as Requests from "./Requests";
import * as Resolvers from "./Resolvers";

export const getTransactions: Effect.Effect<
  Array<Model.Transaction>,
  Model.GetTransactionsError
> = Effect.request(
  Requests.GetTransactions({}),
  Resolvers.GetTransactionsResolver
);
