import { Effect, pipe } from "effect";
import * as Model from "./Model";

export const getUsers = Effect.tryPromise({
  try: () =>
    fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json() as Promise<Array<Model.User>>
    ),
  catch: () => new Model.GetUsersError(),
});

export const getUserById = (id: number) =>
  pipe(
    Effect.tryPromise({
      try: () =>
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
          (res) => res.json() as Promise<Model.UserS>
        ),
      catch: () => new Model.GetUserByIdError(),
    }),
    Effect.filterOrFail(
      (res): res is Model.UserS => Object.keys(res).length > 0,
      () => new Model.GetUserByIdError()
    )
  );

export const getTodos = Effect.tryPromise({
  try: () =>
    fetch("https://jsonplaceholder.typicode.com/todos").then(
      (res) => res.json() as Promise<Array<Model.Todo>>
    ),
  catch: () => new Model.GetTodosError(),
});

// Retrieves a user by their ID from an external API
// export const getUserById = (id: number) =>
//   Effect.tryPromise({
//     try: () =>
//       fetch(`https://api.example.demo/getUserById?id=${id}`).then(
//         (res) => res.json() as Promise<Model.User>
//       ),
//     catch: () => new Model.GetUserError(),
//   });
// // Sends an email via an external API
// export const sendEmail = (address: string, text: string) =>
//   Effect.tryPromise({
//     try: () =>
//       fetch("https://api.example.demo/sendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ address, text }),
//       }).then((res) => res.json() as Promise<void>),
//     catch: () => new Model.SendEmailError(),
//   });
// // Sends an email to a user by fetching their details first
// export const sendEmailToUser = (id: number, message: string) =>
//   getUserById(id).pipe(
//     Effect.andThen((user) => sendEmail(user.email, message))
//   );
// // Notifies the owner of a todo by sending them an email
// export const notifyOwner = (todo: Model.Todo) =>
//   getUserById(todo.ownerId).pipe(
//     Effect.andThen((user) =>
//       sendEmailToUser(user.id, `hey ${user.name} you got a todo!`)
//     )
//   );
