import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div>Hello from Header</div>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
