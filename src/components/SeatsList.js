import React, {useContext} from 'react'
import Seat from './Seat'
import { seatsContext } from '../SeatsContext'

const SeatsList = () => {
    const {seats, setSeats} = useContext(seatsContext);
    const selectedSeats = seats.filter(seat => seat.selected);

    const reserveSelectedSeats = () => {
        setSeats(prev => {
         return     prev.map(prevSeat => {
                if(selectedSeats.some(item => item.id ===prevSeat.id)) {
                    return {...prevSeat, selected: false, status: 'unavailable'}
                }
                return prevSeat
            })
        })
    }
    const clearSelectedSeats = () => {
        setSeats(prev => {
            return prev.map(prevSeat => {
                return prevSeat.selected ? {...prevSeat, selected: false} : prevSeat;
            })
        })
    }
  return (
    <div className='seats-container'>
        {seats.map(seat => (
            <Seat key={seat.id} seat={seat}/>
        ))}
        <form>
            <button className='clear' type='button' onClick={clearSelectedSeats}>Clear</button>
            <button className='reserve' type='button' onClick={reserveSelectedSeats}>Reserve ({selectedSeats.length} selected)</button>
        </form>
    </div>
  )
}

export default SeatsList