-- CreateTable
CREATE TABLE "RestaurantService" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "restaurantsId" TEXT NOT NULL,

    CONSTRAINT "RestaurantService_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RestaurantService" ADD CONSTRAINT "RestaurantService_restaurantsId_fkey" FOREIGN KEY ("restaurantsId") REFERENCES "Restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
