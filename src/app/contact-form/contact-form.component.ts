import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppState } from '../reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { insured } from '../shared/models/insurted.modal';
import { FormGroupDirective, FormGroup, Validators, FormControl } from '@angular/forms';
import { SharedService } from '../shared/services/shared.service';
import { ValidationService } from '../shared/services/validation.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() formNumber: number;
  @Input() contact: insured;
  dataJson = this.sharedSrv.data;
  curretForm: FormGroup;
  @Output() addContat = new EventEmitter<boolean>();

  constructor(private store: Store<AppState>, private rootFormGroup: FormGroupDirective, private sharedSrv: SharedService) {
  }

  ngOnInit() {
    debugger;
    alert();
    this.rootFormGroup.form.addControl("contactsList"+this.formNumber,this.addFormArray("contactsList"));
    this.curretForm = this.rootFormGroup.control.get("contactsList"+this.formNumber) as FormGroup;

  }

  addFormArray(form): FormGroup {
    const group: any = {};

    Object.keys(this.dataJson).forEach(elemnt => {
      if (this.dataJson[elemnt].form == form) {
        let validation = [];
        if (this.dataJson[elemnt].validators)
          this.dataJson[elemnt].validators.forEach(valid => {
            validation.push(Validators[valid])
          })

        if (this.dataJson[elemnt].customValid) {
          this.dataJson[elemnt].customValid.forEach(valid => {
            validation.push(ValidationService[valid])
          })

        }
        group[this.dataJson[elemnt].field] = new FormControl(this.contact[this.dataJson[elemnt].field], validation);

      }
    });

    return new FormGroup(group);
  }

  addContatToList() {
    this.addContat.emit(false);
    let contact: insured = new insured(
      this.formControls["name"].value, this.formControls["type"].value, this.formControls["adress"].value, "", 0, this.formControls["phone"].value, this.formControls["mail"].value, this.formControls["deliveryFLag"].value, false,this.contact.counterId);
    this.store.dispatch({
      type: 'UPDATE_INSURED',
      payload: <insured>contact
    });

  }

  get formControls() {
    return this.curretForm.controls;
  }

  get controlsList() {
    return Object.keys(this.dataJson).map(key => this.dataJson[key]).filter(x => x.form == "contactsList");
  }

}
