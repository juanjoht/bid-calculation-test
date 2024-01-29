import { CalculateAmount } from "./calculate-amount";

export class AssociationFee extends CalculateAmount {
    getAmount(basePriceVehicle: number): number {
        if (basePriceVehicle >=1 && basePriceVehicle <= 500) {
            return  5;
        }
        if (basePriceVehicle > 500 && basePriceVehicle <= 1000) {
            return  10;
        }
        if (basePriceVehicle > 1000 && basePriceVehicle <= 3000) {
            return  15;
        }
        if (basePriceVehicle > 3000) {
            return  20;
        }
        return  0;
    }
}