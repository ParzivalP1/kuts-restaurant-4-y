-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "visitorId" INTEGER NOT NULL,
    "table" INTEGER NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "books_visitorId_key" ON "books"("visitorId");

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_visitorId_fkey" FOREIGN KEY ("visitorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
