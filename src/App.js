import React from "react";
import ReservationStatus from "./components/ReservationStatus";
import SeatsList from "./components/SeatsList";
import "./App.css";
import SeatsContextProvider from "./SeatsContext.js";

function App() {
  return (
    <div className="App">
      <SeatsContextProvider>
        <ReservationStatus  />
        <div className="cinema-container">
          <SeatsList  />
        </div>
      </SeatsContextProvider>
    </div>
  );
}

export default App;
