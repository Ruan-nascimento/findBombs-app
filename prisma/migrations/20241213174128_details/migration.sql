-- CreateTable
CREATE TABLE "Find" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "type" TEXT NOT NULL,
    "descName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "plates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "rpm" TEXT NOT NULL,
    "hp" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "capacitor" INTEGER NOT NULL,
    "amp" REAL NOT NULL,
    "wireWork" INTEGER NOT NULL,
    "wireStart" INTEGER NOT NULL,
    "sequenceWork" TEXT NOT NULL,
    "sequenceStart" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Find_id_key" ON "Find"("id");

-- CreateIndex
CREATE UNIQUE INDEX "plates_id_key" ON "plates"("id");
