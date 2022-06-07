/*
  Warnings:

  - You are about to alter the column `techUsageModifier` on the `SafeTech` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SafeTech" (
    "techUsageGrade" INTEGER NOT NULL,
    "techUsageModifier" REAL NOT NULL,
    "rejected" BOOLEAN NOT NULL
);
INSERT INTO "new_SafeTech" ("rejected", "techUsageGrade", "techUsageModifier") SELECT "rejected", "techUsageGrade", "techUsageModifier" FROM "SafeTech";
DROP TABLE "SafeTech";
ALTER TABLE "new_SafeTech" RENAME TO "SafeTech";
CREATE UNIQUE INDEX "SafeTech_techUsageGrade_key" ON "SafeTech"("techUsageGrade");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
