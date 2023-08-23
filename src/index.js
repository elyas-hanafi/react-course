import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const initialState = [
  {
    text: 'hey i am ok',
    toggle: false,
    id: 1,
  },
  {
    text: 'hey i am ok',
    toggle: false,
    id: 2,
  },
];

const createStore = (reducer) => {
  let state;
  const dispatch = (action) => {
    state = reducer(state, action);
  };

  const getState = () => state;

  dispatch({});
  return { getState, dispatch };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          toggle: action.toggle,
        },
      ];
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
