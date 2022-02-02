import { Reducer } from 'redux';
import { ActivesState, ActivesTypes } from './types';

const INITIAL_STATE: ActivesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ActivesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActivesTypes.GET_ACTIVES:
      return { ...state, loading: true };
    case ActivesTypes.SUCCCES_ACTIVES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case ActivesTypes.ERROR_ACTIVES:
      return {
      ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;