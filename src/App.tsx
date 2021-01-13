import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import { IApplicationState } from './redux/application-store-state';
import Component from './components/calculator';
import './App.css';

interface MainProps {
  store: Store<IApplicationState>
}

const App: React.FC<MainProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <div>
          <Component />
        </div>
      </React.StrictMode>
    </Provider>
  )
}

export default App;
