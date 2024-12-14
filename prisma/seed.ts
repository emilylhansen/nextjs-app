import "tsconfig-paths/register";
import prisma from "../lib/db";
import { faker } from "@faker-js/faker";
import { Array, pipe } from "effect";

async function main() {
  console.log("Seeding...");

  const userIds = pipe(Array.range(0, 50), Array.map(String));

  const makeUser = (id: string) =>
    prisma.user.upsert({
      where: { id },
      update: {},
      create: {
        id,
        first: faker.person.firstName(),
        last: faker.person.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
      },
    });

  const usersPromises = pipe(userIds, Array.map(makeUser));

  const users = await Promise.all(usersPromises);

  const makeTransaction = ({
    index,
    userId,
  }: {
    index: number;
    userId: string;
  }) => {
    const id = `transaction${index}-${userId}`;
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

    return prisma.transaction.upsert({
      where: { id },
      update: {},
      create: {
        id,
        date: new Date(),
        description: faker.finance.transactionDescription(),
        category,
        amount: Number(faker.finance.amount()),
        storeName: faker.company.name(),
        transactionType,
        userId,
      },
    });
  };

  const transactionsPromises = pipe(
    userIds,
    Array.map((userId) =>
      pipe(
        Array.range(0, 10),
        Array.map((i) => makeTransaction({ index: i, userId }))
      )
    ),
    Array.flatten
  );

  const transactions = await Promise.all(transactionsPromises);

  console.log({ users, transactions });
  console.log("Finished seeding.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
