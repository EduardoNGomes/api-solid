/*
  Warnings:

  - Added the required column `latitude` to the `gyms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `gyms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "gyms" DROP COLUMN "latitude",
ADD COLUMN     "latitude" DECIMAL(65,30) NOT NULL,
DROP COLUMN "longitude",
ADD COLUMN     "longitude" DECIMAL(65,30) NOT NULL;
