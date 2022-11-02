import { insured } from './shared/models/insurted.modal';
import { Action } from '@ngrx/store';

export interface AppState {
    readonly insured: insured[];
  }
  

export const ADD_INSURED = 'ADD_INSURED';

export function addInsuredReducer(state: insured[] = [], action) {
  switch (action.type) {
    case ADD_INSURED:
        return [...state, action.payload];
        
    default:
        return state;
    }
}