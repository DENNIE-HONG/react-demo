import React from 'react';
import { render } from 'react-dom';
import RouteMap from './routes';
const root = document.createElement('div');
document.body.appendChild(root);
render(
  <RouteMap />,
  root
);
