import './App.css'
import {Hi} from "./components/Hi.tsx";
import mock from "./server/flights.json";
function App() {

    console.log(mock.result);
    return (
      <>
          {mock.result.flights.map((flight) => {
              return (
                  <div className="border-black border-2" key={flight.flightToken}>
                        <p className="text-cyan-500">{flight.flight.carrier.caption}</p>
                        <p>{flight.flight.price.total.amount}</p>
                        <p>{flight.flight.price.total.currency}</p>
                        <p>{flight.flight.legs[0].segments[0].departureCity.caption}</p>
                        <p>{flight.flight.legs[0].segments[0].arrivalCity.caption}</p>
                        <p>{flight.flight.legs[0].segments[0].departureDate}</p>
                        <p>{flight.flight.legs[0].segments[0].arrivalDate}</p>
                        <p>{flight.flight.legs[0].segments[0].airline.caption}</p>
                        <p>{flight.flight.legs[0].segments[0].aircraft.caption}</p>
                        <p>{flight.flight.legs[0].segments[0].flightNumber}</p>
                        <p>{flight.flight.legs[0].segments[0].duration}</p>
                        <p>{flight.flight.legs[0].segments[0].departureTerminal}</p>
                        <p>{flight.flight.legs[0].segments[0].arrivalTerminal}</p>
                        <p>{flight.flight.legs[0].segments[0].departureCity.caption}</p>
                        <p>{flight.flight.legs[0].segments[0].arrivalCity.caption}</p>
                        <p>{flight.flight.legs[0].segments[0].departureDate}</p>
                        <p>{flight.flight.legs[0].segments[0].arrivalDate}</p>
                        <p>{flight.flight.legs[0].segments[0].airline.caption}</p>
                        <p>{flight.flight.legs[0].segments[0].aircraft.caption}</p>
                        <p>{flight.flight.legs[0].segments[0].flightNumber}</p>
                        <p>{flight.flight.legs[0].segments[0].duration}</p>
                        <p>{flight.flight.legs[0].segments[0].departureTerminal}</p>
                  </div>
              )
          })}
          <Hi/>
      </>
    )
}

export default App
