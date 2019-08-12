import { combineReducers } from 'redux';
import postUserDataReducer from './postUserDataReducer';
import audioReducer from './audioReducer';
import blocksReducer from './blocksReducer';
import presetsReducer from './presetsReducer';

export default combineReducers({
  authStatus: postUserDataReducer,
  audioData: audioReducer,
  blocksData: blocksReducer,
  presetsData: presetsReducer,
});
