/*
  Warnings:

  - The primary key for the `Restaurant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RestaurantService` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "RestaurantService" DROP CONSTRAINT "RestaurantService_restaurantId_fkey";

-- AlterTable
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Restaurant_id_seq";

-- AlterTable
ALTER TABLE "RestaurantService" DROP CONSTRAINT "RestaurantService_pkey",
ALTER COLUMN "restaurantId" SET DATA TYPE TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "RestaurantService_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "RestaurantService_id_seq";

-- AddForeignKey
ALTER TABLE "RestaurantService" ADD CONSTRAINT "RestaurantService_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
