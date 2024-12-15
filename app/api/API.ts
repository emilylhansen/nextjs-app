import { Effect, pipe, RequestResolver } from "effect";
import prisma from "@/lib/db";

// export const getTransactions = Effect.tryPromise({
//   try: () => prisma.transaction.findMany(),
//   catch: (error) =>
//     new Model.GetTransactionsError({ message: JSON.stringify(error) }),
// });
