import { combineReducers } from 'redux';

import profile from './user/profile';
import actives from './broker/actives';

export default combineReducers({
  profile,
  actives
});