import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, {authSaga} from './auth.js'
import loading from './loading.js';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
  auth,
  loading,
  user
});

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;