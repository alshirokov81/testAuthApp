import axios from 'axios';
import { AnyAction } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import {call, put, takeLatest} from 'redux-saga/effects';

import {AUTH, setTokens, authPayload} from '../actions';
import {signin} from '../netFunctions/auth';

function* auth({payload}: AnyAction) {
    const {login, password} = payload;
    const {accessToken, refreshToken} = yield signin(login, password);
    axios.defaults.headers['x-access-token'] = accessToken;
    yield put(setTokens({accessToken, refreshToken}));
}

export function* watchAuth() {
    yield takeLatest(AUTH, auth);
}