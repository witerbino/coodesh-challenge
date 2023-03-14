import { Request, Response } from 'express';

import { ImportSalesService } from '@/services/ImportSalesService';

export class ImportSalesController {
  constructor(
    private importSalesService: ImportSalesService
  ) {}

  async handle(request: Request, response: Response) {
    await this.importSalesService.execute(request.file?.buffer);

    return response.sendStatus(201);
  }
}
