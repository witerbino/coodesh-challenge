import readline from 'node:readline';
import { Readable } from 'node:stream';

import { SaleEntity } from '@/entities/SaleEntity';
import { SalesRepository } from '@/repositories/SalesRepository';

export class ImportSalesService {
  constructor(private salesRepository: SalesRepository) {}

  async execute(file: Buffer): Promise<void> {
    const readable = new Readable();
    readable.push(file);
    readable.push(null);

    const saleLine = readline.createInterface({
      input: readable,
    });

    for await (const sale of saleLine) {
      const type    = this.getType(sale);
      const date    = this.getDate(sale);
      const product = this.getProduct(sale);
      const value   = sale.slice(56, 65);
      const seller  = sale.slice(66, 85).trim();

      const saleEntity = new SaleEntity(
        null,
        type,
        date,
        product,
        value,
        seller
      );

      await this.salesRepository.save(saleEntity);
    }
  }

  private getType(sale: string) {
    return sale.slice(0, 1);
  }

  private getDate(sale: string) {
    return new Date(sale.slice(1, 26));
  }

  private getProduct(sale: string) {
    return sale.slice(26, 55).trim();
  }
}
