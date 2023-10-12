import { prisma } from "database";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
  try {
    const products = await prisma.product.findMany();
    console.log("[API] GET /products", products);
    return NextResponse.json({ message: "success", products }, { status: 200 });
  } catch (error) {
    console.log("[API] GET /products", error);
    return NextResponse.json({ message: "failed", error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();

    const category = await prisma.category.findFirst({
      where: {
        id: json.category,
      },
    });
    if (!category) {
      return NextResponse.json(
        { message: "failed", error: "Category not found" },
        { status: 500 }
      );
    }
    const product = await prisma.product.create({
      data: {
        name: json.name,
        description: json.description,
        price: json.price,
        stock: json.stock,
        category: {
          connect: {
            id: json.category,
          },
        },
      },
    });
    console.log("[API] POST /products", product);

    return NextResponse.json({ message: "success", product }, { status: 200 });
  } catch (error) {
    console.log("[API] POST /products", error);
    return NextResponse.json({ message: "failed", error }, { status: 500 });
  }
}
