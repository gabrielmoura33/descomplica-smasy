/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `students` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "students" ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "students_slug_key" ON "students"("slug");
