import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducer';
import { insured } from '../shared/models/insurted.modal';
import { SharedService } from '../shared/services/shared.service';
@Component({
  selector: 'app-contacts-centralization',
  templateUrl: './contacts-centralization.component.html',
  styleUrls: ['./contacts-centralization.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsCentralizationComponent implements OnInit {

  constructor(private store: Store<AppState>, private sharedSrv: SharedService) { }
  added: boolean = false;
  count = 0;
  ngOnInit() {
    this.store.select(state => state.insured).subscribe(data => this.count = data.length)

  }

  addInsured() {
    this.store.dispatch({
      type: 'ADD_INSURED',
      payload: <insured>this.sharedSrv.insured
    });
    this.added = true;
  }

  resetAll() {
    this.store.dispatch({
      type: 'RESET_ALL',
      payload: null
    });
  }

  reset() {
    this.store.dispatch({
      type: 'RESET',
      payload: null
    });
  }
}
