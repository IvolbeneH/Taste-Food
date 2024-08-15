/*
  Warnings:

  - The primary key for the `RestaurantService` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `restaurantsId` on the `RestaurantService` table. All the data in the column will be lost.
  - The `id` column on the `RestaurantService` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Restaurants` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `restaurantId` to the `RestaurantService` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RestaurantService" DROP CONSTRAINT "RestaurantService_restaurantsId_fkey";

-- AlterTable
ALTER TABLE "RestaurantService" DROP CONSTRAINT "RestaurantService_pkey",
DROP COLUMN "restaurantsId",
ADD COLUMN     "restaurantId" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30),
ADD CONSTRAINT "RestaurantService_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Restaurants";

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "phones" TEXT[],
    "description" TEXT NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RestaurantService" ADD CONSTRAINT "RestaurantService_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
