import { CalculateAmount } from "./calculate-amount";

export class SpecialFeeLuxury extends CalculateAmount {
    getAmount(basePriceVehicle: number): number {
        const valueAppliedFourPercent = super.calculateValueBasedInPercentage(basePriceVehicle, 0.04)
        return valueAppliedFourPercent;
    }
}