"use client";

import { Schema } from "@effect/schema";
import { effectTsResolver } from "@hookform/resolvers/effect-ts";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { capitalize } from "effect/String";
import React from "react";
import { Controller, useForm } from "react-hook-form";

enum Action {
  Pay = "PAY",
  Request = "REQUEST",
}

const schema = Schema.Struct({
  action: Schema.Enums(Action).annotations({
    message: () => "username required",
  }),
  to: Schema.String.pipe(Schema.minLength(7)).annotations({
    message: () => "username required",
  }),
  for: Schema.String.annotations({
    message: () => "username required",
  }),
  amount: Schema.Number.pipe(
    Schema.nonNaN(),
    Schema.greaterThan(0)
  ).annotations({
    message: () => "username required",
  }),
}).annotations({ title: "FormS" });

type FormS = Schema.Schema.Type<typeof schema>;

// type Form = {
//   action: Action;
//   to: string;
//   for: string;
//   amount: number;
// };

// type FormSEncoded = Schema.Schema.Encoded<typeof schema>;

// const FormSDecode = Schema.decodeUnknownEither(schema);

// type ErrorsState = Record<keyof Pick<Form, "to" | "amount">, boolean>;
// const ErrorsStateInit: ErrorsState = {
//   to: false,
//   amount: false,
// };
// const FormStateInit: Form = {
//   action: Action.Pay,
//   to: "",
//   for: "",
//   amount: 0,
// };

// const isSingleParseIssue = (
//   value: SingleOrNonEmpty<ParseIssue>
// ): value is ParseIssue => !Array.isArray(value);

// const isArrayParseIssue = (
//   value: SingleOrNonEmpty<ParseIssue>
// ): value is Array.NonEmptyReadonlyArray<ParseIssue> => Array.isArray(value);

// const isPointer = (value: ParseIssue): value is Pointer =>
//   value._tag === "Pointer";

// const values = React.useMemo(() => getValues(), [getValues]);
// const [form, setForm] = React.useState<Form>(FormStateInit);

// const [errors, setErrors] =
//   React.useState<Record<keyof Pick<Form, "to" | "amount">, boolean>>(
//     ErrorsStateInit
//   );

// const onChangeAction = () => register("action", { required: true });
//   setValue(
//     "action",
//     values.action === Action.Pay ? Action.Request : Action.Pay
//   ); // ✅
// console.log(values);
// const onChangeTo = (
//   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) => setForm((value) => ({ ...value, to: event.target.value }));

// const onChangeFor = (
//   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) => setForm((value) => ({ ...value, for: event.target.value }));

// const onChangeAmount = (
//   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) =>
//   setForm((value) => ({
//     ...value,
//     amount: parseFloat(event.target.value),
//   }));

// const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
//   event.preventDefault();

//   const decode = FormSDecode(form, {
//     onExcessProperty: "error",
//     errors: "all",
//   });

//   if (Either.isLeft(decode)) {
//     console.error("Decoding failed:");
//     console.error(TreeFormatter.formatErrorSync(decode.left));

//     debugger;

//     const issue = decode.left.issue;
//     const issuesE = Predicate.hasProperty(issue, "issues")
//       ? Either.right(
//           isArrayParseIssue(issue.issues) ? issue.issues : [issue.issues]
//         )
//       : Either.left(
//           new Error(
//             "Decoding failed: there should be issues but none were found"
//           )
//         );

//     const pathsE = pipe(
//       issuesE,
//       Either.map(
//         Array.reduce<Array<keyof ErrorsState>, ParseIssue>([], (acc, issue) =>
//           isPointer(issue) && String(issue.path) in errors
//             ? Array.append(acc, issue.path as keyof ErrorsState)
//             : acc
//         )
//       )
//     );

//     const newErrorsE = pipe(
//       pathsE,
//       Either.map(
//         Array.reduce(ErrorsStateInit, (acc, path) =>
//           pipe(acc, Record.set(path, true))
//         )
//       )
//     );

//     pipe(
//       newErrorsE,
//       Either.map((newErrors) => {
//         setErrors(newErrors);
//       })
//     );
//   } else {
//     setErrors(ErrorsStateInit);
//   }
// };

const Page = ({ onSubmit }: { onSubmit: (data: FormS) => void }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormS>({
    resolver: effectTsResolver(schema),
    defaultValues: {
      action: Action.Pay,
      to: "",
      amount: 0,
    },
  });

  return (
    <React.Fragment>
      <div className="col-span-7 row-span-6 col-start-3 row-start-3  pb-4 px-6">
        <Paper
          className="h-full rounded-3xl p-6 flex flex-col [&>*]:pb-4"
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              className="text-center w-full"
            >
              Card
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={10} className="text-center w-full">
                Ten
              </MenuItem>
              <MenuItem value={20} className="text-center w-full">
                Twenty
              </MenuItem>
              <MenuItem value={30} className="text-center w-full">
                Thirty
              </MenuItem>
            </Select>
          </FormControl>
          <Controller
            control={control}
            name="action"
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Switch
                    {...field}
                    checked={field.value === Action.Pay}
                    onChange={() =>
                      field.onChange(
                        field.value === Action.Pay ? Action.Request : Action.Pay
                      )
                    }
                  />
                }
                label={capitalize(field.value)}
              />
            )}
          />

          <TextField
            id="to"
            label="To"
            variant="outlined"
            placeholder="Name, username, phone, email"
            error={!!errors.to}
            {...register("to")}
            helperText={errors.to?.message}
          />
          <TextField
            id="for"
            label="For"
            variant="outlined"
            placeholder="Add a note"
            {...register("for")}
          />
          <TextField
            id="amount"
            label="Amount"
            variant="outlined"
            type="number"
            className="text-2xl"
            placeholder="$ USD"
            error={!!errors.amount}
            {...register("amount")}
            helperText={errors.amount?.message}
          />
          <Button variant="outlined" type="submit">
            Pay
          </Button>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default Page;
