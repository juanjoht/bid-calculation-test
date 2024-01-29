import { CalculateAmount } from "./calculate-amount";

export class BasicFeeCommon extends CalculateAmount {
    getAmount(basePriceVehicle: number): number {
        
        const valueAppliedTenPercent = super.calculateValueBasedInPercentage(basePriceVehicle, 0.1)
        return  (valueAppliedTenPercent <= 10) ? 10 : (valueAppliedTenPercent >= 50) ? 50 : valueAppliedTenPercent;
    }
}