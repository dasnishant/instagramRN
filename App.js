import React from 'react';
import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './src/store';
import {persistor} from './src/store';

const App = () => {
  // console.log(showAsyncStorageContentInDev())
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
