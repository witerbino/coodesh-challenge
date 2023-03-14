import { Response } from 'express';

import { FindAllSalesService } from '@/services/FindAllSalesService';

export class FindAllSalesController {
  constructor(
    private findAllSalesService: FindAllSalesService
  ) {}

  async handle(response: Response) {
    const sales = await this.findAllSalesService.execute();

    return response.json(sales);
  }
}
