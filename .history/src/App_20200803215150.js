import React from 'react';
import './App.css';
import UploadFrom from './Component/UploadFrom';
import ImageGrid from './Component/ImageGrid'
import Title from './Component/TItle'

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
