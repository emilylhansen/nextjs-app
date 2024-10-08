"use client";

import { Paper } from "@mui/material";
import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { capitalize } from "effect/String";
import { Either, Option, pipe, Predicate, Record, Array } from "effect";
import { isNotNull, isNotUndefined, isUndefined } from "effect/Predicate";
import { Schema, TreeFormatter } from "@effect/schema";
import {
  Composite,
  ParseIssue,
  SingleOrNonEmpty,
  Pointer,
  Path,
} from "@effect/schema/ParseResult";
import { isNil } from "effect/List";

enum Type {
  Pay = "PAY",
  Request = "REQUEST",
}

type Form = {
  type: Type;
  to: string;
  for: string;
  amount: number;
};

const FormS = Schema.Struct({
  type: Schema.Enums(Type),
  to: Schema.String.pipe(Schema.nonEmpty(), Schema.minLength(7)),
  for: Schema.String,
  amount: Schema.Number.pipe(Schema.nonNaN(), Schema.greaterThan(0)),
});

type FormS = Schema.Schema.Type<typeof FormS>;

type FormSEncoded = Schema.Schema.Encoded<typeof FormS>;

const FormSDecode = Schema.decodeUnknownEither(FormS);

type ErrorsState = Record<keyof Pick<Form, "to" | "amount">, boolean>;
const ErrorsStateInit: ErrorsState = {
  to: false,
  amount: false,
};
const FormStateInit: Form = {
  type: Type.Pay,
  to: "",
  for: "",
  amount: 0,
};

const isSingleParseIssue = (
  value: SingleOrNonEmpty<ParseIssue>
): value is ParseIssue => !Array.isArray(value);

const isArrayParseIssue = (
  value: SingleOrNonEmpty<ParseIssue>
): value is Array.NonEmptyReadonlyArray<ParseIssue> => Array.isArray(value);

const isPointer = (value: ParseIssue): value is Pointer =>
  value._tag === "Pointer";

const Page = () => {
  const [form, setForm] = React.useState<Form>(FormStateInit);

  const [errors, setErrors] =
    React.useState<Record<keyof Pick<Form, "to" | "amount">, boolean>>(
      ErrorsStateInit
    );

  const onChangeType = () =>
    setForm((value) => ({
      ...value,
      type: value.type === Type.Pay ? Type.Request : Type.Pay,
    }));

  const onChangeTo = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((value) => ({ ...value, to: event.target.value }));

  const onChangeFor = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((value) => ({ ...value, for: event.target.value }));

  const onChangeAmount = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setForm((value) => ({
      ...value,
      amount: parseFloat(event.target.value),
    }));

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const decode = FormSDecode(form, {
      onExcessProperty: "error",
      errors: "all",
    });

    if (Either.isLeft(decode)) {
      console.error("Decoding failed:");
      console.error(TreeFormatter.formatErrorSync(decode.left));

      const issue = decode.left.issue;
      const issuesE = Predicate.hasProperty(issue, "issues")
        ? Either.right(
            isArrayParseIssue(issue.issues) ? issue.issues : [issue.issues]
          )
        : Either.left(
            new Error(
              "Decoding failed: there should be issues but none were found"
            )
          );

      const pathsE = pipe(
        issuesE,
        Either.map(
          Array.reduce<Array<keyof ErrorsState>, ParseIssue>([], (acc, issue) =>
            isPointer(issue) && String(issue.path) in errors
              ? Array.append(acc, issue.path as keyof ErrorsState)
              : acc
          )
        )
      );

      const newErrorsE = pipe(
        pathsE,
        Either.map(
          Array.reduce(ErrorsStateInit, (acc, path) =>
            pipe(acc, Record.set(path, true))
          )
        )
      );

      pipe(
        newErrorsE,
        Either.map((newErrors) => {
          setErrors(newErrors);
        })
      );
    } else {
      setErrors(ErrorsStateInit);
    }
  };

  return (
    <React.Fragment>
      <div className="col-span-7 row-span-6 col-start-3 row-start-3  pb-4 px-6">
        <Paper
          className="h-full rounded-3xl p-6 flex flex-col [&>*]:pb-4"
          component="form"
          onSubmit={onSubmit}
        >
          <FormControlLabel
            control={
              <Switch
                checked={form.type === Type.Pay}
                onChange={onChangeType}
              />
            }
            label={capitalize(form.type)}
          />

          <TextField
            id="to"
            label="To"
            variant="outlined"
            placeholder="Name, username, phone, email"
            error={errors["to"]}
            onChange={onChangeTo}
            value={form.to}
          />
          <TextField
            id="for"
            label="For"
            variant="outlined"
            placeholder="Add a note"
            onChange={onChangeFor}
            value={form.for}
          />
          <TextField
            id="amount"
            label="Amount"
            variant="outlined"
            type="number"
            placeholder="$ USD"
            error={errors["amount"]}
            onChange={onChangeAmount}
            value={form.amount}
          />
          <Button variant="contained" sx={{ maxWidth: 120 }} type="submit">
            Pay
          </Button>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default Page;
