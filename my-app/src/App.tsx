import './App.css';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Users from './components/user';

const App: FC = () => {


  return (
    <Provider store={store}>
      <div className="App">
        <Users />
      </div>
    </Provider>

  );
}

export default App;
