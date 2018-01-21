import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const test = {
//   name: 'Tom',
//   getDetails() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// const getDetailFunc = test.getDetails.bind(test);
// console.log(getDetailFunc());
// console.log(test.getDetails());
