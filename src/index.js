import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div>
    <p>Hello!</p>
  </div>
);

render(<App />, null);

const data = { maybe: [1, 2, 3] };

console.log(data.maybe?.[0]);
