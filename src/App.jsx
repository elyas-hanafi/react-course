import React from 'react';

const createStore = (reducer) => {
  let state;

  const dispatch = (action) => {
    state = reducer(action);
  };

  dispatch();

  const getState = () => state;

  return { getState, dispatch };
};

const initState = { name: 'elyas' };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'RETURN_DEFAULT':
      return state;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default function App() {
  return (
    <>
      <button>Click me</button>
    </>
  );
}
