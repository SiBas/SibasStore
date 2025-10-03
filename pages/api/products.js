import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const products = await prisma.product.findMany();
    res.json(products);
  }

  if (req.method === "POST") {
    const { game, name, price } = req.body;
    const product = await prisma.product.create({
      data: { game, name, price },
    });
    res.json(product);
  }
}
