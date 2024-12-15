import { Schema } from "@effect/schema";
import { User } from "../../../app/api/model/user";
import { APIInfo } from "@/lib/features/featuresTypes";

export const UsersArray = Schema.Array(User);
export type UsersArray = typeof UsersArray.Type;

export const Users = APIInfo<string, UsersArray>(
  Schema.String,
  UsersArray
).pipe(Schema.brand("Users"));
export type Users = typeof Users.Type;
