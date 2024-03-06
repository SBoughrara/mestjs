import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
let user = { id: 0 };
const createUser = async () => {
  user = await prisma.user.create({
    data: {
      fullname: 'khalil',
    },
  });
};
const createProduct = async () => {
  await prisma.product.create({
    data: {
      productNqme: 'khalil',
      price: 15,
      category: 'test',
      userId: user.id,
    },
  });
};
(async () => {
  await createUser();
  createProduct();
})();
