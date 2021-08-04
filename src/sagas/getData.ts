import { Alert } from 'react-native';
import {takeLatest, put} from 'redux-saga/effects';

import {GET_DATA, setLoadedData, refreshToken} from '../actions';
import {getData} from '../netFunctions/getData';

function* receiveData() {
    let data;
    try {
        data = yield getData();
        yield put(setLoadedData(data));
    } catch (e) {
        if (e.response.status === 401) {
            yield put(refreshToken());
        } else {
            yield put(setLoadedData(e.message));
        }
    } 
}

export function* watchReceiveData() {
    yield takeLatest(GET_DATA, receiveData);
}
