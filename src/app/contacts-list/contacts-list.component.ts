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
  dataJson = this.sharedSrv.data;
  addContat: boolean;
  insurteds: Observable<insured[]>;

  constructor(private store: Store<AppState>, private rootFormGroup: FormGroupDirective, private sharedSrv: SharedService) {
    this.insurteds = this.store.select(state => state.insured);
  }

  addContatToList() {
    this.addContat=true;
    let contact: insured = new insured('','', '', "", 0, '', '', false, true);
    this.store.dispatch({
      type: 'ADD_INSURED',
      payload: <insured>contact
    });

  }
  ngOnInit() {
  }

  

}
