import prisma from "@/lib/db";
import { Effect } from "effect";
import { Transaction, GetTransactionsError } from "../model/transaction";

// Required for Next.js API routes
export const GET = async (request: Request) => {
  const res = await prisma.transaction.findMany();

  return new Response(JSON.stringify(res), {
    status: 200,
  });
};

export const GET_effect = Effect.tryPromise({
  try: () =>
    fetch("/api/transactions").then(
      (res) => res.json() as Promise<Array<Transaction>>
    ),
  catch: (error) =>
    new GetTransactionsError({ message: JSON.stringify(error) }),
});
