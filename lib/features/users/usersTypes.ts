import { Schema } from "@effect/schema";
import * as Model from "../../../app/api/Model";
import { APIInfo } from "@/lib/features/featuresTypes";

export const UsersArray = Schema.Array(Model.User);
export type UsersArray = typeof UsersArray.Type;

export const Users = APIInfo<string, UsersArray>(
  Schema.String,
  UsersArray
).pipe(Schema.brand("Users"));
export type Users = typeof Users.Type;
