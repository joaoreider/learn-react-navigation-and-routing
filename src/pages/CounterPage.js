import Button from '../components/Button';
import { useState } from 'react';
import Panel from '../components/Panel';

export default function CounterPage({initialCount}) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setValueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg font-bold">Counter is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input value={valueToAdd || ""} onChange={handleChange} className= "p-1 m-3 bg-gray-50 border border-gray-300" type='number'/>
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}