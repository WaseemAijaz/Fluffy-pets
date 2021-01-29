import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import TodoList from "./TodoList";
//import KeepApp from './KeepApp';
import './Keep.css';
import './i18n';
import Fluffy from './Fluffy_Pets/FYP/Fluffy';
import './Fluffy_Pets/FYP/DesignStyle.css';
import './Fluffy_Pets/fluffypets.css';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Fluffy/>
  </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);
