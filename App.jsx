import React, { useState } from 'react';
import StyleContext from './StyleContext';

import Todo from './Todo'; 

function App() {
  const [styles, setStyles] = useState({
    box1: {},
    box2: {},
    box3: {},
    page: {}
  });

  return (
    <StyleContext.Provider value={{ styles, setStyles }}>
      <div style={{ ...styles.page, height: '100vh', display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
       
        <Todo />
      </div>
    </StyleContext.Provider>
  );
}

export default App;

