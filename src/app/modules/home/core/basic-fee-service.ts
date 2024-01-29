import {CalculateAmount} from  './calculate-amount'

export class BasicFeeService {
    constructor( private calculateAmount: CalculateAmount ) {}

    getAmount(basePriceVehicle: number)
    {
        return this.calculateAmount.getAmount(basePriceVehicle);
    }

}