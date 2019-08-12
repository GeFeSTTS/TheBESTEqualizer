import {
  ADD_NEW_USER_PRESET_FROM_INPUT,
  ADD_NEW_USER_PRESET_FROM_DB,
} from '../actions/types';

const initialState = ['Default', 'Jazz', 'Rock', 'Pop'];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_USER_PRESET_FROM_DB: {
      return [
        ...state,
        ...action.userPresets,
      ];
    }
    case ADD_NEW_USER_PRESET_FROM_INPUT: {
      return [...state, action.valueFromPresetInput];
    }
    default:
      return state;
  }
}
