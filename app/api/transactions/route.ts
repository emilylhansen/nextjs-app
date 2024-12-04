import prisma from "@/lib/db";
import { Effect } from "effect";
import * as Model from "../Model";

export const GET = async (request: Request) => {
  const res = await prisma.transaction.findMany();

  return new Response(JSON.stringify(res), {
    status: 200,
  });
};

export const GET_effect = Effect.tryPromise({
  try: () =>
    fetch("/api/transactions").then(
      (res) => res.json() as Promise<Array<Model.Transaction>>
    ),
  catch: (error) =>
    new Model.GetTransactionsError({ message: JSON.stringify(error) }),
});
