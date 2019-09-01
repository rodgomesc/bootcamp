import React from 'react';
import { Router } from 'react-router-dom';
// import GlobalStyle from './styles/global';
import Routes from './routes';
import history from './services/history';
import './config/ReactotronConfig';

console.tron('helloo world');
function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
