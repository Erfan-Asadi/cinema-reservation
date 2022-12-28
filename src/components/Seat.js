import React, { useContext } from 'react'
import { seatsContext } from '../SeatsContext'

const Seat = ({seat}) => {
    const { setSeats} = useContext(seatsContext);
    
    const clickSeatHandler = () => {
        if(seat.status === 'unavailable') return;

        setSeats(prev => {
           return prev.map(prevSeat => {
                if(prevSeat.id === seat.id) {
                    return {...prevSeat, selected: !prevSeat.selected}
                }
                return prevSeat;
            })

        })
    }
  return (
    <button className={`seat ${seat.status} ${seat.selected && 'selected'}`} onClick={clickSeatHandler}></button>
  )
}

export default Seat