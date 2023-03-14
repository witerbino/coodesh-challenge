import { SaleEntity } from '@/entities/SaleEntity';

export interface SalesRepository {
  save(saleEntity: SaleEntity): Promise<void>;
  findAll(): Promise<any[]>;
}
