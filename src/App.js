import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CounterOutput from './CounterOutput'
import CounterInput from './CounterInput'
import { Provider } from 'react-redux'
import store from './store/Store'
function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <CounterOutput />
        <CounterInput />
      </div>
    </Provider>
  );
}

export default App;
