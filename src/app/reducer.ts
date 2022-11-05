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
    case ADD_INSURED: {
      action.payload.counterId = state.length;
      return [...state, action.payload];
    }


    case UPDATE_INSURED: {
      debugger;
      let updateIndex = state.findIndex(x => x.counterId == action.payload.counterId);
      return [...state.slice(0, updateIndex), action.payload, ...state.slice(updateIndex + 1, state.length - 1)];
    }

    case RESET_ALL:
      return [];

    case RESET:
      return [...state.filter(x => x.deliveryFlag==true)];

    default:
      return state;
  }
}

