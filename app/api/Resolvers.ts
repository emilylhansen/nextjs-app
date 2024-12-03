import { Effect, RequestResolver, Request, Array, pipe } from "effect";
import * as API from "./API";
import * as Model from "./Model";
import * as Requests from "./Requests";
import prisma from "@/lib/db";

// Assuming GetTransactions cannot be batched, we create a standard resolver
export const GetTransactionsResolver = RequestResolver.fromEffect(
  (
    _: Requests.GetTransactions
  ): Effect.Effect<Array<Model.Transaction>, Model.GetTransactionsError> =>
    Effect.tryPromise({
      try: () => {
        return prisma.transaction.findMany();
        // .finally(() => prisma.$disconnect());

        return fetch("https://jsonplaceholder.typicode.com/users").then(
          (res) => res.json() as Promise<Array<Model.Transaction>>
        );
      },
      catch: (error) =>
        new Model.GetTransactionsError({ message: JSON.stringify(error) }),
    })
);
