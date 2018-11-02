import React, { useState } from 'react';
import { setConfig } from 'react-hot-loader';

setConfig({ pureSFC: true });

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You’ve clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
};
