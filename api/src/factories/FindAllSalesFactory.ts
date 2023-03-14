import { FindAllSalesService } from '@/services/FindAllSalesService';
import { FindAllSalesController } from '@/controllers/FindAllSalesController';
import { PrismaSalesRepository } from '@/repositories/prisma/PrismaSalesRepository';

export function FindAllSalesFactory() {
  const repository = new PrismaSalesRepository();
  const service = new FindAllSalesService(repository);

  return new FindAllSalesController(service);
}
