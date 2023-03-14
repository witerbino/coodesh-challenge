-- CreateEnum
CREATE TYPE "TypeSale" AS ENUM ('VENDA_PRODUTOR', 'VENDA_AFILIADO', 'COMISSAO_PAGA', 'COMISSAO_RECEBIDA');

-- CreateTable
CREATE TABLE "sales" (
    "id" TEXT NOT NULL,
    "type" "TypeSale" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "product" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "seller" TEXT NOT NULL,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
);
