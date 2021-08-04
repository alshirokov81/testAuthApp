import {createReducer} from '@reduxjs/toolkit';

import {setLoadedData} from '../actions';

export interface InitialState {
    data: string
};
const initialState = {
    data: ''
};

export default createReducer(
    initialState,
    (builder) => builder
        .addCase(setLoadedData, (state, action) => {
            return {data: action.payload}
        })
);
