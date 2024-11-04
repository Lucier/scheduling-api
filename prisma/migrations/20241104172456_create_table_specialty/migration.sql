/*
  Warnings:

  - You are about to drop the column `dexription` on the `specialty` table. All the data in the column will be lost.
  - Added the required column `description` to the `specialty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "specialty" DROP COLUMN "dexription",
ADD COLUMN     "description" TEXT NOT NULL;
