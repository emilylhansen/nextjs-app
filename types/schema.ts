// import * as S from "@effect/schema/Schema";
// import { Arbitrary, FastCheck, JSONSchema } from "@effect/schema";
// import type { ParseResult } from "@effect/schema";
// import { Brand } from "effect";

// const getTransactionId = ({ actual }: ParseResult.ParseIssue) => {
//   if (S.is(Transaction)(actual)) {
//     return `Transaction with id: ${actual.id}`;
//   }
// };

// export const Transaction = S.Struct({
//   id: S.String.pipe(S.nonEmpty()),
//   type: S.String.pipe(S.nonEmpty()),
//   value: S.String.pipe(S.nonEmpty()),
//   createdAt: S.Date,
//   updatedAt: S.Date,
// }).annotations({
//   identifier: "Transaction",
//   parseIssueTitle: getTransactionId,
// });

// enum Fruit {
//   Apple = "APPLE",
//   Banana = "BANANA",
//   Orage = "ORANGE",
// }

// const FruitEnum = S.Enums(Fruit);

// type FruitEnum = S.Schema.Type<typeof FruitEnum>;

// const getPersonId = ({ actual }: ParseResult.ParseIssue) => {
//   if (S.is(Person)(actual)) {
//     return `Person with id: ${actual.id}`;
//   }
// };

// // specifies a specific string
// const UserId = S.String.pipe(S.nonEmpty(), S.brand("UserId"));
// type UserIdType = S.Schema.Type<typeof UserId>; // string & Brand<"UserId">

// const Username = S.String.pipe(S.nonEmpty(), S.brand("Username"));
// type UsernameType = S.Schema.Type<typeof Username>; // string & Brand<"Username">

// const Person = S.Struct({
//   id: UserId,
//   username: Username,
//   first: S.String.pipe(S.nonEmpty()),
//   last: S.optional(S.String.pipe(S.nonEmpty()), {
//     // must be a nonempty string or missing the username key. cannot be undefined
//     exact: true,
//   }),
//   age: S.Number,
//   type: S.Literal("X"),
//   fruit: FruitEnum,
// }).annotations({
//   identifier: "Person",
//   parseIssueTitle: getPersonId,
// });

// const isPerson = S.is(Person);
// console.log(isPerson({}));

// const personInstance = Person.make({
//   id: UserId.make("abc123"),
//   username: Username.make("abc123"),
//   first: "undefined",
//   last: "",
//   age: 1,
//   type: "X",
//   fruit: FruitEnum.enums.Apple,
// });

// // const assertsPerson: S.Schema.ToAsserts<typeof Person> = S.asserts(Person);
// // console.log(
// //   assertsPerson({
// //     id: "123abc",
// //     name: "undefined",
// //     age: 1,
// //     type: "X",
// //     fruit: FruitEnum.enums.Apple,
// //   })
// // );

// type PersonType = S.Schema.Type<typeof Person>;
// type PersonEncoded = S.Schema.Encoded<typeof Person>;
// type PersonContext = S.Schema.Context<typeof Person>;

// const decode = S.decodeSync(Person, {
//   errors: "all",
//   onExcessProperty: "error",
//   exact: true,
// });

// decode(personInstance);

// const jsonSchema = JSONSchema.make(Person);
// console.log(JSON.stringify(jsonSchema, null, 2));

// const PersonArbitraryType = Arbitrary.make(Person);
// console.log(FastCheck.sample(PersonArbitraryType, 2));

// const PersonArbitraryEncoded = Arbitrary.make(S.encodedSchema(Person));
// console.log(FastCheck.sample(PersonArbitraryEncoded, 2));
