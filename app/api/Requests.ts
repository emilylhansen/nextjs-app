import { Request } from "effect";
import * as Model from "./Model";

// Define a request to get multiple Transaction items which might
// fail with a GetTransactionsError
export interface GetTransactions
  extends Request.Request<
    Array<Model.Transaction>,
    Model.GetTransactionsError
  > {
  readonly _tag: "GetTransactions";
}

// Create a tagged constructor for GetTransactions requests
export const GetTransactions =
  Request.tagged<GetTransactions>("GetTransactions");
