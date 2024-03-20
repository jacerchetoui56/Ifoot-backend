/*
  Warnings:

  - You are about to drop the column `teamId` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `permissionScopeId` on the `Permission` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "ProtectionEnum" ADD VALUE 'SYSTEM';

-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Permission" DROP CONSTRAINT "Permission_permissionScopeId_fkey";

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "teamId";

-- AlterTable
ALTER TABLE "Permission" DROP COLUMN "permissionScopeId",
ADD COLUMN     "protection" "ProtectionEnum" NOT NULL DEFAULT 'NORMAL',
ADD COLUMN     "scopeId" TEXT;

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "categoryGroupId" TEXT,
ADD COLUMN     "categoryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_AdminToTeam" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AdminToTeam_AB_unique" ON "_AdminToTeam"("A", "B");

-- CreateIndex
CREATE INDEX "_AdminToTeam_B_index" ON "_AdminToTeam"("B");

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_scopeId_fkey" FOREIGN KEY ("scopeId") REFERENCES "PermissionScope"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_categoryGroupId_fkey" FOREIGN KEY ("categoryGroupId") REFERENCES "CategoryGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdminToTeam" ADD CONSTRAINT "_AdminToTeam_A_fkey" FOREIGN KEY ("A") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdminToTeam" ADD CONSTRAINT "_AdminToTeam_B_fkey" FOREIGN KEY ("B") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
