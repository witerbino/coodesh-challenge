import { TypeSale } from '@prisma/client';

export class SaleEntity {
  private _id?: string;
  private _type: TypeSale;
  private _date: Date;
  private _product: string;
  private _value: string;
  private _seller: string;

  constructor(
    id: string,
    type: string,
    date: Date,
    product: string,
    value: string,
    seller: string
  ) {
    this._id = id || null;
    this._type = this.getTypeEnum(type);
    this._date = date;
    this._product = product;
    this._value = value;
    this._seller = seller;
  }

  private getTypeEnum(type: string): TypeSale {
    switch (type) {
    case '1':
      return TypeSale.VENDA_PRODUTOR;
    case '2':
      return TypeSale.VENDA_AFILIADO;
    case '3':
      return TypeSale.COMISSAO_PAGA;
    case '4':
      return TypeSale.COMISSAO_RECEBIDA;
    }
  }

  get type(): TypeSale {
    return this._type;
  }

  get date(): Date {
    return this._date;
  }

  get product(): string {
    return this._product;
  }

  get value(): string {
    return this._value;
  }

  get seller(): string {
    return this._seller;
  }
}
