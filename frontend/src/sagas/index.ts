import { all, fork } from 'redux-saga/effects';
import { watchRemoveResource } from './resource.sagas';
import { socketRootSaga } from './looser-socket.sagas';

export const rootSaga = function* root() {
  yield all([fork(watchRemoveResource), fork(socketRootSaga)]);
};
