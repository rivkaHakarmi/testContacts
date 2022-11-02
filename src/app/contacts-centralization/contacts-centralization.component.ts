import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducer';
import { insured } from '../shared/models/insurted.modal';
import { SharedService } from '../shared/services/shared.service';
@Component({
  selector: 'app-contacts-centralization',
  templateUrl: './contacts-centralization.component.html',
  styleUrls: ['./contacts-centralization.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ContactsCentralizationComponent implements OnInit {

  constructor(private store: Store<AppState>,private sharedSrv:SharedService) { }

  ngOnInit() {
  }

 addInsured(){
  this.store.dispatch({
    type: 'ADD_PRODUCT',
    payload: <insured> this.sharedSrv.insured
  });
  }
  
}
