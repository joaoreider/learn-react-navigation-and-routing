import Button from '../components/Button';
import { useReducer } from 'react';
import Panel from '../components/Panel';
import { produce } from 'immer';

const INCREMENT_COUNT= 'increment';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const DECREMENT_COUNT = 'decrement';
const ADD_TO_COUNT = 'add-to-count';

export default function CounterPage({initialCount}) {
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT:
        state.count++;
        return;
      case DECREMENT_COUNT:
        state.count--;
        return;
      case CHANGE_VALUE_TO_ADD:
        state.valueToAdd = action.payload;
        return;
      case ADD_TO_COUNT:
        state.count += state.valueToAdd;
        state.valueToAdd = 0;
        return;
      default:
        return
    }

  };
  const [state, dispatch] = useReducer(produce(reducer), {count: initialCount, valueToAdd: 0});
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    })
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT
    })
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_TO_COUNT
    })
  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg font-bold">Counter is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input value={state.valueToAdd || ""} onChange={handleChange} className= "p-1 m-3 bg-gray-50 border border-gray-300" type='number'/>
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}