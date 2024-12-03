import { Array, pipe } from "effect";
import { Category, TransactionType } from "./../app/api/Model";
import { faker } from "@faker-js/faker";
import prisma from "@/lib/db";

async function main() {
  const userIds = pipe(Array.range(0, 10), Array.map(String));

  const makeUser = async (id: string) =>
    await prisma.user.upsert({
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

  const makeTransaction = async ({
    index,
    userId,
  }: {
    index: number;
    userId: string;
  }) => {
    const id = `transaction${index}-${userId}`;
    const category = String(faker.helpers.enumValue(Category.enums));
    const transactionType = String(
      faker.helpers.enumValue(TransactionType.enums)
    );

    return await prisma.transaction.upsert({
      where: { id },
      update: {},
      create: {
        id,
        date: faker.date.anytime(),
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
        Array.range(0, 100),
        Array.map((i) => makeTransaction({ index: i, userId }))
      )
    )
  );

  const transactions = await Promise.all(transactionsPromises);

  console.log({ users, transactions });
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
