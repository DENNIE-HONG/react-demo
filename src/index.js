import React from 'react';
import { render } from 'react-dom';
import App from './App'; // 引入组件，在这个组件中进行热更新

const root = document.createElement('div');
document.body.appendChild(root);

render(<App />, root);
