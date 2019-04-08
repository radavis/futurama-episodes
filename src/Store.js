import React, { createContext, useReducer } from 'react';

// Store object
// The context object to which child components will subscribe.
// Created via the React.createContext() function
const Store = createContext();

const initialState = {
  episodes: [],
  favorites: []
};

// reducer function
// Input: state, action
// Output: updated state object
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

// The StoreProvider stores the data for our app, and provides data to consumers.
// It encapsulates all other components in the application.
// Input: props (so we can access child components)
const StoreProvider = props => {
  // useReducer, a React Hook
  // Input: reducer (updates state based on an action), initialState
  // Output: state, dispatch
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};

export { Store, StoreProvider };

export default Store;
