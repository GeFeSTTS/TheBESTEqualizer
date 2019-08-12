import reducer from './postUserDataReducer';
import * as actionTypes from '../actions/types';

const initialState = {
  loading: false,
  error: null,
};

describe('Test postUserData reducer', () => {
  it('request have been sent', () => {
    const action = {
      type: actionTypes.AUTH_START,
      loading: true,
    };
    expect(reducer(initialState, action).loading).toBe(true);
  });
  it('request have been failed', () => {
    const action = {
      type: actionTypes.AUTH_FAIL,
      error: 'auth error',
      loading: false,
    };
    expect(reducer(initialState, action).error).toEqual('auth error');
  });
  it('request was successful', () => {
    const action = {
      type: actionTypes.POST_USER_DATA,
      error: null,
    };
    expect(reducer(initialState, action)).toEqual({ ...initialState });
  });
});
