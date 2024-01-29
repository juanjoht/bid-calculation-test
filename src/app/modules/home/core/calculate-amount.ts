export abstract class CalculateAmount {
    abstract getAmount(basePriceVehicle?: number): number

    calculateValueBasedInPercentage(valueBase: number, percentegeToApply: number){
        const valueAppliedPercent: number = valueBase * percentegeToApply;
        return valueAppliedPercent
    }
}












