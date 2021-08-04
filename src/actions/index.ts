import {createAction} from '@reduxjs/toolkit';

interface tokensPayload {
    refreshToken: string,
    accessToken: string 
}

export interface authPayload {
    login: string,
    password: string 
}

interface tokens {
    refreshToken: string,
    accessToken: string 
}

export const AUTH = 'AUTH';
export const GET_DATA = 'GET_DATA';
export const SET_LOADED_DATA = 'SET_LOADED_DATA';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export const setTokens = createAction<tokensPayload,'SET_TOKENS'>('SET_TOKENS');
export const setLoadedData = createAction<string, 'SET_LOADED_DATA'>('SET_LOADED_DATA');
export const auth = createAction<authPayload, 'AUTH'>(AUTH);
export const getData = createAction(GET_DATA);
export const refreshToken = createAction(REFRESH_TOKEN);

