import React from 'react'
import { createContext , useReducer } from 'react';

export const WorkoutsContext = createContext();

export const WorkoutsContextProvider = ({children}) => {
    
    return (
        <WorkoutsContext.Provider >
            {children}
        </WorkoutsContext.Provider>
    ) 
}

function WorkoutContext() {

  return (
    <div></div>
  )
}

export default WorkoutContext;