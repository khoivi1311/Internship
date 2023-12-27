import {/* inject, */ BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class PaginateService {
  constructor(/* Add @inject to inject parameters */) {}

  async calculateTotalPages(
    pageSize: number,
    totalData: number,
  ): Promise<number> {
    const calculate: number = Math.floor(totalData / pageSize);
    if (totalData % pageSize === 0) {
      return calculate;
    } else {
      return calculate + 1;
    }
  }
}
