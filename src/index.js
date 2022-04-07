import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

i18next.init({
    interpolation: { escapeValue: false },
});

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <I18nextProvider i18n={i18next}>
              <App />
          </I18nextProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
