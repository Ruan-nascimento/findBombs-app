import { prisma } from "@/app/_services/client/prismaClient";

export async function ShowAllPlates() {
  const plates = await prisma.plate.findMany()

  return plates
}