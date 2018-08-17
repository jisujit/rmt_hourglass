import { combineReducers } from 'redux';

import register from './register';
import auth from './auth';
import userInfo from './userInfo';
import userEdit from './userEdit';
import listUsers from './listUsers';
import listTimeTracks from './listTimeTracks';
import createUser from './createUser';
import createTimeTrack from './createTimeTrack';

export default combineReducers({
  register,
  auth,
  userInfo,
  userEdit,
  listUsers,
  createUser,
  createTimeTrack,
  listTimeTracks,
});
