import React from 'react';
import Greeting from './components/Greeting';
import Button from './components/Button';
import UserProfile from './components/UserProfile';

const App = () => {
  const user = { name: 'John Doe', age: 30, email: 'john@example.com' };

  return (
    <div>
      <Greeting name="John" age={30} />
      <Button label="Click Me" type="primary" />
      <UserProfile user={user} />
    </div>
  );
};

export default App;