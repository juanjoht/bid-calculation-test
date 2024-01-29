import { vehicleType } from "./vehicle-type.model";

export interface vehicleFee {
    basePrice:number;
    vehicleType:vehicleType;
    BasicFee:number;
    SpecialFee:number;
    AssociationFee:number;
    StorageFee:number;
    Total?: number;
  }