import { Effect, RequestResolver, Request, Array, pipe } from "effect";
import * as API from "./API";
import * as Model from "./Model";
import * as Requests from "./Requests";

// Assuming GetTodos cannot be batched, we create a standard resolver.
export const GetTodosResolver = RequestResolver.fromEffect(
  (request: Requests.GetTodos) => API.getTodos
);

// Assuming GetUserById can be batched, we create a batched resolver.
export const GetUserByIdResolver = RequestResolver.makeBatched(
  (requests: ReadonlyArray<Requests.GetUserById>) =>
    pipe(
      // attempt to fetch data
      Effect.tryPromise({
        // on success then return json
        try: () => {
          // const urlSearchParams = pipe(
          //   requests,
          //   Array.map(({ id }) => ["userId", id.toString()])
          // );
          // debugger;
          // const urlSearchParamsString = new URLSearchParams(
          //   urlSearchParams
          // ).toString();
          // debugger;

          // const url =
          //   "https://jsonplaceholder.typicode.com/users?" +
          //   urlSearchParamsString;
          // debugger;

          return fetch(
            "https://jsonplaceholder.typicode.com/users?userId"
          ).then((res) => res.json()) as Promise<Array<Model.User>>;
        },
        // on failure then return error
        catch: () => new Model.GetUserByIdError(),
      }),
      // on success complete each `Request` with the specified effectful computation. It will succeed with a User
      Effect.andThen((users) =>
        Effect.forEach(requests, (request, index) =>
          Request.completeEffect(request, Effect.succeed(users[index]))
        )
      ),
      // on failure complete each `Request` with the specified effectful computation. It will fail with an error.
      Effect.catchAll((error) =>
        Effect.forEach(requests, (request) =>
          Request.completeEffect(request, Effect.fail(error))
        )
      )
    )
);
