import prisma from "@/lib/db";
import { faker } from "@faker-js/faker";
import { Array, pipe } from "effect";
import "tsconfig-paths/register";

const makeUser = () => {
  return {
    id: faker.string.uuid(),
    first: faker.person.firstName(),
    last: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  };
};

const makeTransaction = () => {
  const id = faker.string.uuid();
  const category = faker.helpers.arrayElement([
    "income",
    "groceries",
    "utilities",
    "entertainment",
    "rent",
    "transportation",
    "insurance",
    "investment",
    "savings",
    "debt",
    "other",
  ]);

  const transactionType = faker.helpers.arrayElement([
    "expenses",
    "refund",
    "deposit",
  ]);

  return {
    id,
    date: new Date(),
    description: faker.finance.transactionDescription(),
    category,
    amount: Number(faker.finance.amount()),
    storeName: faker.company.name(),
    transactionType,
    userId: faker.string.uuid(),
  };
};

const USERS = pipe(
  Array.range(0, 20),
  Array.map((i) => makeUser())
);

const TRANSACTIONS = pipe(
  Array.range(0, 100),
  Array.map((i) => makeTransaction())
);

export default async function seedDB() {
  const users = prisma.user.createMany({
    data: USERS,
  });
  const transactions = prisma.transaction.createMany({
    data: TRANSACTIONS,
  });

  return await Promise.all([transactions, users]);
}
