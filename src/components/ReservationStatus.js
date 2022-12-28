import React, { useContext } from 'react'
import { seatsContext } from '../SeatsContext';
import Seat from './Seat';
const ReservationStatus = () => {
    const {seats} = useContext(seatsContext);

    const availableSeats = seats.filter(seat => seat.status ==='available');
    const unavailableSeats = seats.filter(seat => seat.status ==='unavailable');
    const selectedSeats = seats.filter(seat => seat.selected);
  return (
    <div className='reservation-status'>
        <table>
            <thead>
                <tr>
                    <td><button className='seat available' title='available'></button></td>
                    <td><button className='seat unavailable' title='unavailable'></button></td>
                    <td><button className='seat selected' title='selected'></button></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{availableSeats.length}</td>
                    <td>{unavailableSeats.length}</td>
                    <td>{selectedSeats.length}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ReservationStatus