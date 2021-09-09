import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LanguageProvider } from './Contex/Language';

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
    <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

