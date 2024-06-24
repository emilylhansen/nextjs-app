import { Effect } from "effect";
import * as Model from "./Model";
import * as Requests from "./Requests";
import * as Resolvers from "./Resolvers";

// Defines a query to fetch all Todo items
export const getTodos: Effect.Effect<
  Array<Model.Todo>,
  Model.GetTodosError
> = Effect.request(Requests.GetTodos({}), Resolvers.GetTodosResolver);

// Defines a query to fetch a user by their ID
export const getUserById = (id: number) =>
  Effect.request(Requests.GetUserById({ id }), Resolvers.GetUserByIdResolver);
