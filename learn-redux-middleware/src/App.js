import React from 'react';
import { applyMiddleware } from 'redux';
import SampleContatiner from './container/SampleContainer';
import CounterContatiner from './container/CounterContainer';



/*
const App = () => {
  return (
    <div>
      <CounterContatiner />
    </div>
  )
}
 */

const App = () => {
  return (
    <div>
      <SampleContatiner />
    </div>
  );
};


export default App;