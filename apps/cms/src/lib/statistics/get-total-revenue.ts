import { prisma } from "database";
export const getTotalRevenue = async (userId: string) => {
  const paidOrders = await prisma.order.findMany({
    where: {
      userId: userId,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  const totalRevenue = paidOrders.reduce((total, order) => {
    const orderTotal = order.items.reduce((orderSum, item) => {
      return orderSum + item.product.price;
    }, 0);
    return total + orderTotal;
  }, 0);

  return totalRevenue;
};
