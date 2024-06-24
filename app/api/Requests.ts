import { Request } from "effect";
import * as Model from "./Model";

// Define a request to get multiple Todo items which might fail with a GetTodosError
export interface GetTodos
  extends Request.Request<Array<Model.Todo>, Model.GetTodosError> {
  readonly _tag: "GetTodos";
}

// Create a tagged constructor for GetTodos requests
export const GetTodos = Request.tagged<GetTodos>("GetTodos");

// Define a request to fetch a User by ID which might fail with a GetUserByIdError
export interface GetUserById
  extends Request.Request<Model.User, Model.GetUserByIdError> {
  readonly _tag: "GetUserById";
  readonly id: number;
}

// Create a tagged constructor for GetUserById requests
export const GetUserById = Request.tagged<GetUserById>("GetUserById");

export type ApiRequest = GetTodos | GetUserById;
