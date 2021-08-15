import React from 'react'
import ColorBox from './component/ColorBox'
import { ColorProvider } from './contexts/color';
import SelectColors from './component/SelectColor';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;

