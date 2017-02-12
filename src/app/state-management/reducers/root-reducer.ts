import {IAppState} from '../state/app-state';
import {INCREMENT} from '../actions/root-action';
import {tassign} from 'tassign';

export const rootReducer = (state: IAppState, action): IAppState => {

  switch (action.type) {
    case INCREMENT:
      //return Object.assign({}, state, {counter: state.counter + 1});
      return tassign(state, {counter: state.counter + 1});
    default: {
      return state;
    }
  }
};
