import { CalculateAmount } from "./calculate-amount";

export class BasicFeeLuxury extends CalculateAmount {
    getAmount(basePriceVehicle: number): number {
        const valueAppliedTenPercent = super.calculateValueBasedInPercentage(basePriceVehicle, 0.1)
        return (valueAppliedTenPercent <= 25) ? 25 : (valueAppliedTenPercent >= 200) ? 200 : valueAppliedTenPercent;
    }
}
