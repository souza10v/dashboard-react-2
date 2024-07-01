/*
  Warnings:

  - The primary key for the `customers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `customers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[rg]` on the table `customers` will be added. If there are existing duplicate values, this will fail.
  - Made the column `rg` on table `customers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "customers" DROP CONSTRAINT "customers_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "rg" SET NOT NULL,
ADD CONSTRAINT "customers_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "customers_rg_key" ON "customers"("rg");
