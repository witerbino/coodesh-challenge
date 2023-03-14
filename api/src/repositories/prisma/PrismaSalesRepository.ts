import { prisma } from '@/database/database';

import { SaleEntity } from '@/entities/SaleEntity';
import { SalesRepository } from '@/repositories/SalesRepository';

export class PrismaSalesRepository implements SalesRepository {
  async save(saleEntity: SaleEntity): Promise<void> {
    await prisma.sale.create({ 
      data: {
        type: saleEntity.type,
        date: saleEntity.date,
        product: saleEntity.product,
        value: saleEntity.value,
        seller: saleEntity.seller,
      },
    });
  }

  async findAll(): Promise<any[]> {
    const sales = await prisma.sale.findMany({});

    return sales;
  }
}
