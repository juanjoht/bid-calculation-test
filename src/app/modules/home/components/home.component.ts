import { Component, OnInit } from '@angular/core';
import {BasicFeeService} from '../core/basic-fee-service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { vehicleType } from '../model/vehicle-type.model';
import { vehicleFee } from '../model/vehicle-fee.model';
import { BasicFeeCommon } from '../core/basic-fee-common';
import { SpecialFeeCommon } from '../core/special-fee-common';
import { SpecialFeeLuxury } from '../core/special-fee-luxury';
import { AssociationFee } from '../core/association-fee';
import { StorageFee } from '../core/storage-fee';
import { CalculateAmount } from '../core/calculate-amount';
import { BasicFeeLuxury } from '../core/basic-fee-luxury';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit{
  vehicleTypes: vehicleType[] | undefined;
  resultCalcultationFees: vehicleFee[]  = [];
  formGroup!: FormGroup;
  submitted : boolean = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.vehicleTypes = [
        { name: 'Common' },
        { name: 'Luxury' }
    ];

    this.formGroup = this.formBuilder.group({
      basePrice: [0, [Validators.required]],
      selectedType: ['',[Validators.required]]
    });
    }

  calculateAmount()
  {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const codeVehicleTypeSelected: string = this.controlsFormGroup['selectedType'].value
    let calculateBasicFee = null;
    let calculateSpecialFee = null;

    switch (codeVehicleTypeSelected) {
      case 'Common':
        calculateBasicFee = new BasicFeeCommon();
        calculateSpecialFee = new SpecialFeeCommon();
        break;
      case 'Luxury':
        calculateBasicFee = new BasicFeeLuxury();
        calculateSpecialFee = new SpecialFeeLuxury();
        break;
      default:
         throw  ('No vehicle Type Selected')
    }

    const objVehiclesFees: vehicleFee = {
      basePrice: this.controlsFormGroup['basePrice'].value,
      vehicleType: this.controlsFormGroup['selectedType'].value,
      BasicFee: this.getFee(calculateBasicFee),
      SpecialFee: this.getFee(calculateSpecialFee),
      AssociationFee: this.getFee(new AssociationFee()),
      StorageFee: this.getFee(new StorageFee()),
    }
    objVehiclesFees.Total = this.getTotal(objVehiclesFees);
    this.setValuesFee(objVehiclesFees);
  }

  getFee(calculateBasicFeeObj: CalculateAmount) : number
  {
    const feeBasicService = new BasicFeeService(calculateBasicFeeObj);
    return feeBasicService.getAmount(this.controlsFormGroup['basePrice'].value);
  }

  getTotal(calculateDataFee: vehicleFee) : number
  {
    return calculateDataFee.BasicFee + calculateDataFee.SpecialFee + calculateDataFee.AssociationFee + calculateDataFee.StorageFee;
  }

  setValuesFee(calculationDataFees : vehicleFee)
  {
    this.resultCalcultationFees?.push(calculationDataFees);
  }

  clearResults()
  {
    this.submitted = false;
    this.formGroup.reset();
    this.resultCalcultationFees = [];
  }


  get controlsFormGroup() { return this.formGroup?.controls; }
}
