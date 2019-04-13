import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div>
    <p>Hello!</p>
  </div>
);

render(<App />, document.getElementById('root'));

const data = { maybe: [{ values: 123 }, 2, 3] };

console.log(data.maybe?.[50]?.values);
