import { CalculateAmount } from "./calculate-amount";

export class SpecialFeeCommon extends CalculateAmount {
    getAmount(basePriceVehicle: number): number {
        const valueAppliedTwoPercent = super.calculateValueBasedInPercentage(basePriceVehicle, 0.02)
        return  valueAppliedTwoPercent;
    }
}