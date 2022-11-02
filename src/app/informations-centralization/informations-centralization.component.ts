import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroupDirective, FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-informations-centralization',
  templateUrl: './informations-centralization.component.html',
  styleUrls: ['./informations-centralization.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InformationsCentralizationComponent implements OnInit {

  informationsCentralizationForm: FormGroup;
  dataJson=this.sharedSrv.data;
  inshuredPerson=this.sharedSrv.insured;
  constructor(private rootFormGroup: FormGroupDirective, private sharedSrv: SharedService) { }

  ngOnInit() {
    debugger;
      this.informationsCentralizationForm = this.rootFormGroup.control.get("informationsCentralization") as FormGroup;

      this.informationsCentralizationForm.controls.claimCause.valueChanges.subscribe(val => {
        this.dataJson["injuryType"].isActive=true;
        this.informationsCentralizationForm.controls["injuryType"].setValidators([Validators.required]);
      })
  }


  get formControls() {
    return this.informationsCentralizationForm.controls;
  }

  get controlsList() {
    return Object.keys(this.dataJson).map(key => this.dataJson[key]).filter(x => x.form == "informationsCentralization");
  }

  
}
