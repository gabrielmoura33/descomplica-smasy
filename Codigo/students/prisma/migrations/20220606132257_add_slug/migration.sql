/*
  Warnings:

  - Made the column `slug` on table `students` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "students" ALTER COLUMN "slug" SET NOT NULL;
