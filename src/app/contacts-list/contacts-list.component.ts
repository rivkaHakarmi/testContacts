import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducer';
import { Observable } from 'rxjs';
import { insured } from '../shared/models/insurted.modal';
import { FormGroupDirective, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsListComponent implements OnInit {

  addContat: boolean;
  insurteds;
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
    let contact: insured
    //להמשיך למלא את המשתנה
    //  = new insured(
    //   this.formControls["name"].value);
  }

  get formControls() {
    return this.contactsListForm.controls;
  }

  get controlsList() {
    return Object.keys(this.dataJson).map(key => this.dataJson[key]).filter(x => x.form == "contactsList");
  }

}
