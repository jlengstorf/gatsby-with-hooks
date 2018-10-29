import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You’ve clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
};
