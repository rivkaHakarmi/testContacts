import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducer';
import { Observable } from 'rxjs';
import { insured } from '../shared/models/insurted.modal';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ContactsListComponent implements OnInit {

  addContat:boolean;
  insurteds;

  constructor(private store: Store<AppState>) { 
    this.insurteds = this.store.select(state => state.insured);
  }

  ngOnInit() {
  }

}
