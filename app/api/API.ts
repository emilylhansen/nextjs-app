import { Effect, pipe } from "effect";
import * as Model from "./Model";

export const getUsers = Effect.tryPromise({
  try: () =>
    fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json() as Promise<Array<Model.UserS>>
    ),
  catch: () => new Model.GetUsersError(),
});

export const getUserById = (
  id: number
): Effect.Effect<Model.UserS, Model.GetUserByIdError> =>
  pipe(
    Effect.tryPromise({
      try: () =>
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
          (res) => res.json() as Promise<Model.UserS>
        ),
      catch: () => new Model.GetUserByIdError(),
    }),
    Effect.filterOrFail(
      (res): res is Model.UserS => Object.keys(res).length > 0,
      () => new Model.GetUserByIdError()
    )
  );

export const getTodos = Effect.tryPromise({
  try: () =>
    fetch("https://jsonplaceholder.typicode.com/todos").then(
      (res) => res.json() as Promise<Array<Model.Todo>>
    ),
  catch: () => new Model.GetTodosError(),
});
