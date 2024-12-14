import { Schema } from "@effect/schema";

export const APIStatus = Schema.Literal(
  "idle",
  "pending",
  "rejected",
  "fulfilled"
);

export const APIInfo = <ErrorType = any, DataType = any>(
  errorType: Schema.Schema<ErrorType>,
  dataType: Schema.Schema<DataType>
) =>
  Schema.Struct({
    status: APIStatus,
    error: Schema.Option(errorType),
    data: Schema.Option(dataType),
    lastUpdated: Schema.Date,
  });
