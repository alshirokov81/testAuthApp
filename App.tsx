import React from 'react';
import {Provider} from 'react-redux';
import type {ReactNode} from 'react';

import AppContainer from './src/components/AppContainer';
import store from './configureStore';

const App: () => ReactNode = () => {
  return (
    <Provider store={store}>
        <AppContainer />
    </Provider>
  );
};

export default App;
