import { CalculateAmount } from "./calculate-amount";

export class StorageFee extends CalculateAmount {
    getAmount(): number {
        return  100;
    }
}