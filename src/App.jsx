import React, { useReducer, useState } from 'react';

const initState = {
  number: 0,
  status: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'IncreaseNumber':
      return {
        ...state,
        number: state.number + 1,
      };
    default:
      return state;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'IncreaseNumber' });
        }}
      >
        Click me
      </button>
      <h2>{state.number}</h2>
    </>
  );
}
