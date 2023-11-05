/*
  Warnings:

  - A unique constraint covering the columns `[fileId]` on the table `Artwork` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Artwork` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Artwork_fileId_key" ON "Artwork"("fileId");

-- CreateIndex
CREATE UNIQUE INDEX "Artwork_userId_key" ON "Artwork"("userId");
