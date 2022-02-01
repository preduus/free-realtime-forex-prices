import { Reducer } from 'redux';
import { ProfileState, ProfileTypes } from './types';

const INITIAL_STATE: ProfileState = {
  data: {},
  error: false,
  loading: false,
};

const reducer: Reducer<ProfileState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProfileTypes.GET_PROFILE:
      return { ...state, loading: true };
    case ProfileTypes.SUCCCES_PROFILE:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case ProfileTypes.ERROR_PROFILE:
      return {
      ...state, loading: false, error: true, data: {},
      };
    default:
      return state;
  }
};

export default reducer;