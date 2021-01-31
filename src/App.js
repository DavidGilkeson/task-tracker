import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dr app',
      day: '23 Feb',
    },
    {
      id: 2,
      text: 'Dr app 2',
      day: '24 Feb',
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks ={tasks} />
    </div>
  );
}

export default App;
