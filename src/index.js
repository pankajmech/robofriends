import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
//import SearchBox from './SearchBox';
import 'tachyons';
import { robots } from './robots';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();


