import {combineReducers} from '@reduxjs/toolkit';

import tokens, {InitialState as TokensType} from './tokens';
import loadedData, {InitialState as LoadedDataType} from './loadedData';

export interface RootReducers {
    tokens: TokensType,
    loadedData: LoadedDataType
};
export default combineReducers({tokens, loadedData});
