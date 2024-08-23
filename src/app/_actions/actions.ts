import { db } from "../lib/prisma";

export async function restaurant() {
  return await db.restaurant.findMany({});
}
export async function service() {
  return await db.restaurantService.findMany({});
}
