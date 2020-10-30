import React from 'react';
import Title from './Component/TItle'
import './App.css';
import UploadFrom from './Component/UploadFrom';

function App() {
  return (
    <div className="App">
      <Title />
      <UploadFrom />
      <ImageGrid />
    </div>
  );
}

export default App;
