import React, { createContext, useContext, useReducer} from 'react';

// Prepares the Data Layer
export const StateContext = createContext();

// Wraps our app and prvides the data layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from data layer
export const useStateValue = () => useContext(StateContext);