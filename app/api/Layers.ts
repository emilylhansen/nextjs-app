import { Context, Effect } from "effect";
import * as Requests from "./requests";
import * as Resolvers from "./resolvers";

// class TransactionsService extends Context.Tag("TransactionsService")<
//   TransactionsService,
//   {
//     getTransactions: Effect.Effect<
//       Array<Model.Transaction>,
//       Model.GetTransactionsError
//     >;
//   }
// >() {}

// export const getTransactions: Effect.Effect<
//   Array<Model.Transaction>,
//   Model.GetTransactionsError,
//   TransactionsService
// > = Effect.andThen(TransactionsService, (service) => service.getTransactions);
