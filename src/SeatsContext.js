import React, {createContext, useState} from 'react';

const initialSeats = [
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'unavailable',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'unavailable',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'unavailable',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'unavailable',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'unavailable',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'unavailable',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
    {
        status: 'available',
        id: (Math.random() * 1e7).toString(16),
        selected: false
    },
  ]
export const seatsContext = createContext();
  const SeatsContextProvider = (props) => {
    const [seats, setSeats] = useState(initialSeats);

  return (
    <seatsContext.Provider value={{seats, setSeats}}>
        {props.children}
    </seatsContext.Provider>
  )
}

export default SeatsContextProvider