import { SaleEntity } from '@/entities/SaleEntity';
import { SalesRepository } from '@/repositories/SalesRepository';

export class FindAllSalesService {
  constructor(private salesRepository: SalesRepository) {}

  async execute(): Promise<SaleEntity[]> {
    return await this.salesRepository.findAll();
  }
}
