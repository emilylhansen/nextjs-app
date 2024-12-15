import prisma from "@/lib/db";

export default async function resetDB() {
  const transaction = prisma.transaction.deleteMany({});
  const user = prisma.user.deleteMany({});

  return Promise.all([transaction, user]);
}
