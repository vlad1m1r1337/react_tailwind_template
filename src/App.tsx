import mock from "./server/flights.json";
import {useState} from "react";
import {formatDuration} from "./utils";
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import {Sorting} from "./components/Sorting.tsx";

function App() {
    const [sortOption, setSortOption] = useState('ascending');

    const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSortOption(event.target.value);
    };
    const obj = mock.result.flights;
    console.log(obj);
    return (
        <>
            <div className="flex flex-row">
                <Sorting />
                <div className="flex flex-col w-full p-4">
                    {obj.slice(16, 40).map((flight: any) => {
                        return (
                            <div key={flight.flightToken}>
                                <div className="flex flex-col items-end bg-sky-600 w-full p-4">
                                    <p className="text-white">{`${parseInt(flight.flight.price.passengerPrices[0].singlePassengerTotal.amount, 10)} ₽`}</p>
                                    <p className="text-white">Стоимость для одного взрослого пассажира</p>
                                </div>
                                {flight.flight.legs.map((leg: any, legIndex: number) => {
                                    return (
                                        <div key={legIndex} className="flex flex-col p-4">
                                            <h2 className="text-cyan-500">Этап {legIndex + 1}</h2>
                                            {leg.segments.map((segment: any, segmentIndex: number) => {
                                                console.log("segment", segment);
                                                const departureFormatDate = format(segment.departureDate, 'HH:mm dd MMM EEEE', { locale: ru });
                                                const arrivalFormatDate = format(segment.departureDate, 'HH:mm dd MMM EEEE', { locale: ru });
                                                const [departureTime, departureDay, departureMonth, departureWeekday] = departureFormatDate.split(' ');
                                                const [arrivalTime, arrivalDay, arrivalMonth, arrivalWeekday] = arrivalFormatDate.split(' ');

                                                return (
                                                    <div key={segmentIndex} className="flex flex-col">
                                                        <div className="flex gap-4">
                                                            <p>{segment.departureCity?.caption}, {segment.departureAirport.caption} <span className="text-sky-400">({segment.departureAirport.uid})</span></p>
                                                            <p>{segment.arrivalCity?.caption}, {segment.arrivalAirport.caption} <span className="text-sky-400">({segment.arrivalAirport.uid})</span></p>
                                                        </div>
                                                        <hr/>
                                                        <div className="flex gap-4 justify-between">
                                                            <time dateTime={segment.departureDate}>
                                                                {departureTime} <span
                                                                className="text-sky-400">{departureDay} {departureMonth} {departureWeekday}</span>
                                                            </time>
                                                            <p>{formatDuration(leg.duration)}</p>
                                                            <time dateTime={segment.departureDate}>
                                                                {arrivalTime} <span
                                                                className="text-sky-400">{arrivalDay} {arrivalMonth} {arrivalWeekday}</span>
                                                            </time>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <hr className="flex-grow border-t border-gray-300 ml-7"/>
                                                            {leg.segments.length - 1 ?
                                                                <p className="text-yellow-500 mx-2">{leg.segments.length - 1} пересадка(и)</p> :
                                                                <p className="text-yellow-500 mx-2"> без пересадок</p>
                                                                    }
                                                                    <hr className="flex-grow border-t border-gray-300 mr-7"/>
                                                                </div>
                                                                <p>{`Рейс выполняет: ${segment.airline.caption}`}</p>
                                                        <hr className="border-t-[3px] my-3 border-sky-400 mx-[-1rem]"/>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                                <button className=" h-10 w-full mt-2 mb-4 bg-yellow-500 text-white">Выбрать</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default App
