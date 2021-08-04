import axios from 'axios';
import { Alert } from 'react-native';
import {takeLatest, put, select} from 'redux-saga/effects';

import {GET_DATA, setTokens} from '../actions';
import {getNewToken} from '../netFunctions/auth';
import {RootReducers} from '../reducers';

export const getRefreshgToken = (state: RootReducers) => state.tokens.refreshToken;

function* refreshTokenSaga() {
    const rToken = yield select(getRefreshgToken);
    Alert.alert(`rTok = ${rToken}`);
    const {accessToken, refreshToken} = yield getNewToken();
    axios.defaults.headers['x-access-token'] = accessToken;
    yield put(setTokens({accessToken, refreshToken}));
}

export function* watchRefreshTokenSaga() {
    yield takeLatest(GET_DATA, refreshTokenSaga);
}
