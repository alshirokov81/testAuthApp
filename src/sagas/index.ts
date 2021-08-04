import {all, fork} from 'redux-saga/effects';

import {watchAuth} from './auth';
import {watchReceiveData} from './getData';

export default function* rootSaga() {
    yield all([
        fork(watchAuth),
        fork(watchReceiveData),
    ]);
}

