import {createReducer} from '@reduxjs/toolkit';

import {setTokens} from '../actions';

export interface InitialState {
    refreshToken: string,
    accessToken: string
};
const initialState = {
    refreshToken: '',
    accessToken: ''
};

export default createReducer(
    initialState,
    (builder) => builder
        .addCase(setTokens, (state, action) => {
            const {refreshToken = '', accessToken = ''} = action.payload
            return {
                refreshToken,
                accessToken
            }
        })
);
