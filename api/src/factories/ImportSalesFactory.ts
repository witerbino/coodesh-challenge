import { ImportSalesService } from '@/services/ImportSalesService';
import { ImportSalesController } from '@/controllers/ImportSalesController';
import { PrismaSalesRepository } from '@/repositories/prisma/PrismaSalesRepository';

export function ImportSalesFactory() {
  const repository = new PrismaSalesRepository();
  const service = new ImportSalesService(repository);

  return new ImportSalesController(service);
}
