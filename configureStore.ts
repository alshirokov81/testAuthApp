import {applyMiddleware, compose, createStore} from 'redux';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from './src/reducers';
import watcherSaga from './src/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({thunk: false}), sagaMiddleware] ,
});
sagaMiddleware.run(watcherSaga);

export default store;
