//import React, { useState } from "react";
import React from 'react';
import HelloWorld from './HelloWorld';

import store from './store';

const App = () => {
  //const [tech] = useState('React');
  return <HelloWorld tech={store.getState().tech} />;
};

export default App;
