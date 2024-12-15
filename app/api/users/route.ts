import prisma from "@/lib/db";
import { Effect } from "effect";
import { User, GetUsersError } from "../model/user";

// Required for Next.js API routes
export const GET = async (request: Request) => {
  const res = await prisma.user.findMany();

  return new Response(JSON.stringify(res), {
    status: 200,
  });
};

export const GET_effect = Effect.tryPromise({
  try: () =>
    fetch("/api/users").then((res) => res.json() as Promise<Array<User>>),
  catch: (error) => new GetUsersError({ message: JSON.stringify(error) }),
});
