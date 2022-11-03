import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducer';
import { Observable } from 'rxjs';
import { insured } from '../shared/models/insurted.modal';
import { FormGroupDirective, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared/services/shared.service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsListComponent implements OnInit {

  addContat: boolean;
  insurteds: Observable<insured[]>;
  contactsListForm: FormGroup;
  dataJson = this.sharedSrv.data;

  constructor(private store: Store<AppState>, private rootFormGroup: FormGroupDirective, private sharedSrv: SharedService) {
    this.insurteds = this.store.select(state => state.insured);
  }

  ngOnInit() {
    this.contactsListForm = this.rootFormGroup.control.get("contactsList") as FormGroup;
  }

  addContatToList() {
    this.addContat = false;
    debugger;
    let contact: insured = new insured(
      this.formControls["name"].value, this.formControls["type"].value, this.formControls["tz"].value, "", 0, this.formControls["phone"].value, this.formControls["mail"].value, this.formControls["deliveryFLag"].value, false);
    this.store.dispatch({
      type: 'UPDATE_INSURED',
      payload: <insured>contact
    });

  }

  get formControls() {
    return this.contactsListForm.controls;
  }

  get controlsList() {
    return Object.keys(this.dataJson).map(key => this.dataJson[key]).filter(x => x.form == "contactsList");
  }

}
