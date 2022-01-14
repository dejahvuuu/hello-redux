//import React, { useState } from "react";
import React from 'react';
import HelloWorld from './HelloWorld';
import reducers from './reducers';
import { createStore } from 'redux';

const initialState = { tech: 'React' };
const store = createStore(reducers, initialState);

const App = () => {
  //const [tech] = useState('React');
  return <HelloWorld tech={store.getState().tech} />;
};

export default App;
