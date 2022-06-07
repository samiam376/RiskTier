-- CreateTable
CREATE TABLE "ISO" (
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "minYoe" INTEGER NOT NULL,
    "tier" INTEGER NOT NULL,
    "rejected" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "State" (
    "stateAbr" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "riskTier" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "SafeTech" (
    "techUsageGrade" INTEGER NOT NULL,
    "techUsageModifier" DECIMAL NOT NULL,
    "rejected" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ISO_code_key" ON "ISO"("code");

-- CreateIndex
CREATE UNIQUE INDEX "State_stateAbr_key" ON "State"("stateAbr");

-- CreateIndex
CREATE UNIQUE INDEX "State_name_key" ON "State"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SafeTech_techUsageGrade_key" ON "SafeTech"("techUsageGrade");
