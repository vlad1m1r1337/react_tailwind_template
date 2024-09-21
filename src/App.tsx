import mock from "./server/flights.json";
import {formatDate, formatDuration} from "./utils";
import {Sorting} from "./components/Sorting.tsx";
import {useState} from "react";
import {Clock4, MoveRight} from 'lucide-react';


function App() {
    const obj = mock.result.flights;
    const [flightsEnd, setFlightsEnd] = useState(299)
    console.log(obj);
    return (
        <>
            <div className="flex flex-row">
                <Sorting />
                <div className="flex flex-col w-full p-4">
                    {obj
                        // .sort((a: any, b: any) => {
                        //     const priceA = parseInt(a.flight.price.passengerPrices[0].singlePassengerTotal.amount, 10);
                        //     const priceB = parseInt(b.flight.price.passengerPrices[0].singlePassengerTotal.amount, 10);
                        //     return priceA - priceB;
                        // })
                        .slice(14, flightsEnd)
                        .map((flight: any) => {
                        return (
                            <div key={flight.flightToken}>
                                <div className="flex flex-col items-end bg-sky-600 w-full p-4">
                                    <p className="text-white">{`${parseInt(flight.flight.price.passengerPrices[0].singlePassengerTotal.amount, 10)} ₽`}</p>
                                    <p className="text-white">Стоимость для одного взрослого пассажира</p>
                                </div>
                                {flight.flight.legs.map((leg: any, legIndex: number) => {
                                    const firstSegment = leg.segments[0];
                                    const lastSegment = leg.segments.at(-1);
                                    const [departureTime, departureDay, departureMonth, departureWeekday] = formatDate(firstSegment.departureDate);
                                    const [arrivalTime, arrivalDay, arrivalMonth, arrivalWeekday] = formatDate(lastSegment.arrivalDate);

                                    return (
                                        <div key={legIndex} className="flex flex-col p-4">
                                            <h2 className="text-cyan-500">Этап {legIndex + 1}</h2>
                                                <div className="flex flex-col">
                                                    <div className="flex gap-2 ml-3">
                                                        <p>{firstSegment.departureCity?.caption}, {firstSegment.departureAirport.caption} <span className="text-sky-400">({firstSegment.departureAirport.uid})</span></p>
                                                        <MoveRight className="text-sky-400 stroke-[1]"/>
                                                        <p>{lastSegment.arrivalCity?.caption}, {lastSegment.arrivalAirport.caption} <span className="text-sky-400">({lastSegment.arrivalAirport.uid})</span></p>
                                                    </div>
                                                    <hr className="my-2"/>
                                                    <div className="flex gap-4 justify-between items-center">
                                                        <time dateTime={firstSegment.departureDate}>
                                                            {departureTime} <span className="text-sky-400">{departureDay} {departureMonth} {departureWeekday}</span>
                                                        </time>
                                                        <div className="flex gap-2 my-3">
                                                            <Clock4 className="stroke-[1]" />
                                                            <p>{formatDuration(leg.duration)}</p>
                                                        </div>
                                                        <time dateTime={lastSegment.arrivalDate}>
                                                            {arrivalTime} <span className="text-sky-400">{arrivalDay} {arrivalMonth} {arrivalWeekday}</span>
                                                        </time>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <hr className="flex-grow border-t border-gray-300 ml-7"/>
                                                        { leg.segments.length !== 1 && <p className="text-orange-500 mx-2">{`${leg.segments.length - 1} пересадка`}</p>}
                                                        <hr className="flex-grow border-t border-gray-300 mr-7"/>
                                                    </div>
                                                    <p>{`Рейс выполняет: ${firstSegment.airline.caption}`}</p>
                                                    { legIndex === 0 && <hr className="border-t-[3px] my-3 border-sky-400 mx-[-1rem]"/>}
                                                </div>
                                        </div>
                                    )
                                })}
                                <button className=" h-10 w-full mt-2 mb-4 bg-orange-300 text-white hover:bg-orange-400 active:bg-orange-500">Выбрать</button>
                            </div>
                        )
                    })}
                    <button onClick={() => setFlightsEnd((prev) => prev + 1)} className="self-center border-2 border-black bg-black bg-opacity-5 mb-6 w-[200px] hover:bg-opacity-10 active:bg-opacity-15">Показать ещё</button>
                </div>
            </div>
        </>
    )
}

export default App
