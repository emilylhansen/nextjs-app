import { Either } from "effect/Either";

export interface SerializedError {
  name?: string;
  message?: string;
  code?: string;
  stack?: string;
}

export interface PendingAction<ThunkArg> {
  type: string;
  payload: undefined;
  meta: {
    requestId: string;
    arg: ThunkArg;
  };
}

export interface FulfilledAction<ThunkArg, PromiseResult> {
  type: string;
  payload: PromiseResult;
  meta: {
    requestId: string;
    arg: ThunkArg;
  };
}

export interface RejectedAction<ThunkArg> {
  type: string;
  payload: undefined;
  error: SerializedError | any;
  meta: {
    requestId: string;
    arg: ThunkArg;
    aborted: boolean;
    condition: boolean;
  };
}

export interface RejectedWithValueAction<ThunkArg, RejectedValue> {
  type: string;
  payload: RejectedValue;
  error: { message: "Rejected" };
  meta: {
    requestId: string;
    arg: ThunkArg;
    aborted: boolean;
  };
}

export type Pending = <ThunkArg>(
  userId: number,
  arg: ThunkArg
) => PendingAction<ThunkArg>;

export type Fulfilled = <ThunkArg, PromiseResult>(
  payload: PromiseResult,
  userId: number,
  arg: ThunkArg
) => FulfilledAction<ThunkArg, PromiseResult>;

export type Rejected = <ThunkArg>(
  userId: number,
  arg: ThunkArg
) => RejectedAction<ThunkArg>;

export type RejectedWithValue = <ThunkArg, RejectedValue>(
  userId: number,
  arg: ThunkArg
) => RejectedWithValueAction<ThunkArg, RejectedValue>;

export enum APIStatus {
  Idle = "IDLE",
  Pending = "PENDING",
  Rejected = "REJECTED",
  Fulfilled = "FULFILLED",
}

export interface SerializedError {
  name?: string;
  message?: string;
  code?: string;
  stack?: string;
}

export type APIData<D, E> = {
  status: APIStatus;
  data: Either<D, E>;
};
