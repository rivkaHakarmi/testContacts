import { insured } from './shared/models/insurted.modal';
import { Action } from '@ngrx/store';

export interface AppState {
  readonly insured: insured[];
}


export const ADD_INSURED = 'ADD_INSURED';
export const UPDATE_INSURED = 'UPDATE_INSURED';
export const RESET = 'RESET';
export const RESET_ALL = 'RESET_ALL';

export function insuredReducer(state: insured[] = [], action) {
  debugger

  switch (action.type) {
    case ADD_INSURED:
      return [...state, action.payload];

    case UPDATE_INSURED: {
      debugger;
      let updateIndex = state.findIndex(x => x.tz == action.payload.tz);
      return [...state.slice(0, updateIndex), action.payload, ...state.slice(updateIndex + 1, state.length - 1)];
    }

    case RESET:
      return [];
      
    case RESET_ALL:
      return [...state.filter(x => x.deliveryFlag)];

    default:
      return state;
  }
}

