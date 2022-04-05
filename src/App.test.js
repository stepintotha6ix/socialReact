import React from 'react';
import ReactDOM from 'react';
import SamuraiJSApp from './App';
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SamuraiJSApp />, div)
  ReactDOM.unmountComponentAtNode(div)
});
