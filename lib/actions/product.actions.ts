"use server";
import { prisma } from "@/db/prisma";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { convertToPlainObject } from "../utils";


// This function retrieves all products from the database.
export async function getAllProducts() {
  await prisma.$connect();
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });
  await prisma.$disconnect();
  return convertToPlainObject(products);
}


export async function getProductBySlug(slug:string) {
  await prisma.$connect();
  const product = await prisma.product.findUnique({
    where: {
      slug,
    },
  });
  await prisma.$disconnect();
  return convertToPlainObject(product);

}