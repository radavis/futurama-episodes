import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './Store';
import './index.css';

const componentTree = (
  <StoreProvider>
    <App />
  </StoreProvider>
);

ReactDOM.render(componentTree, document.getElementById('root'));
