import { prisma } from "database";
export const getStockCount = async (userId: string) => {
  const stockCount = await prisma.product.count({
    where: {
      userId: userId,
    },
  });
  return stockCount;
};
