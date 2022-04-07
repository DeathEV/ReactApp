import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import './index.css';
import App from './App';
import common_en from "./lang/en.json"
import common_vi from "./lang/vi.json"

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'vi',
    resources: {
        vi: {
            common: common_vi
        },
        en: {
            common: common_en
        },
    },
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
