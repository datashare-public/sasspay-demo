import data from "../data.json" assert { type: "json" };
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({ data: data.users });
  await prisma.product.createMany({ data: data.products });
  await prisma.customer.createMany({ data: data.customers });
  await prisma.transaction.createMany({ data: data.transactions });
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
