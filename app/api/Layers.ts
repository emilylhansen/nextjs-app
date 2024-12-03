import { Context, Effect } from "effect";
import * as Model from "./Model";
import * as Requests from "./Requests";
import * as Resolvers from "./Resolvers";

class TransactionsService extends Context.Tag("TransactionsService")<
  TransactionsService,
  {
    getTransactions: Effect.Effect<
      Array<Model.Transaction>,
      Model.GetTransactionsError
    >;
  }
>() {}

export const getTransactions: Effect.Effect<
  Array<Model.Transaction>,
  Model.GetTransactionsError,
  TransactionsService
> = Effect.andThen(TransactionsService, (service) => service.getTransactions);
