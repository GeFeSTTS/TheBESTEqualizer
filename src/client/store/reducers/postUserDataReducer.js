import * as actionTypes from '../actions/types';
import { updateObject } from '../../helpers/utility';

const initialState = {
  loading: false,
  error: null,
};

const authStart = state => updateObject(state, { loading: true });
const authSuccess = (state, action) => updateObject(state,
  { error: action.error, loading: false });
const authFail = (state, action) => updateObject(state,
  { error: action.error, loading: false });

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state);
    case actionTypes.POST_USER_DATA: return authSuccess(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    default:
      return state;
  }
}
