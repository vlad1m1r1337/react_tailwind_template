import {Hi} from "./components/Hi.tsx";
import mock from "./server/flights.json";
import {useState} from "react";
function App() {
    const [sortOption, setSortOption] = useState('ascending');

    const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSortOption(event.target.value);
    };
    const obj = mock.result.flights;
    console.log(obj);
    obj.slice(1,2).forEach((flight: any) => {
        flight.flight.legs.forEach((leg: any, legIndex: number) => {
            console.log(`Этап ${legIndex + 1}:`);
            leg.segments.forEach((segment: any, segmentIndex: number) => {
                console.log(`  Сегмент ${segmentIndex + 1}:`);
                console.log(`    Аэропорт вылета: ${segment.departureAirport.caption}`);
                console.log(`    Город вылета: ${segment.departureCity.caption}`);
                console.log(`    Время вылета: ${segment.departureDate}`);
                console.log(`    Аэропорт прилета: ${segment.arrivalAirport.caption}`);
                console.log(`    Город прилета: ${segment.arrivalCity.caption}`);
                console.log(`    Время прилета: ${segment.arrivalDate}`);
                console.log(`    Номер рейса: ${segment.flightNumber}`);
                console.log(`    Авиакомпания: ${segment.airline.caption}`);
            });
        });
    });
    return (
        <>
            <div className="flex flex-row gap-4">
                <div className="p-4">
                    <h2 className="py-3">Сортировать</h2>
                    <label className="flex">
                        <input type="radio" name="sort"/>
                        По возрастанию цены
                    </label>
                    <label className="flex">
                        <input type="radio" name="sort"/>
                        По убыванию цены
                    </label>
                    <label className="flex">
                        <input type="radio" name="sort"/>
                        По популярности
                    </label>
                    <h2 className="py-3">Фильтровать</h2>
                    <label className="flex">
                        <input type="checkbox"/>
                        Без пересадок
                    </label>
                    <label className="flex">
                        <input type="checkbox"/>
                        1 пересадка
                    </label>
                    <h2 className="py-3">Цена</h2>
                    <label className="flex">
                        От
                        <input className="border" type="number"/>
                    </label>
                    <label className="flex mt-3">
                        До
                        <input className="border" type="number"/>
                    </label>
                    <h2 className="py-3">Авиакомпании</h2>
                    <label className="flex">
                        <input type="checkbox"/>
                        Aeroflot
                    </label>
                    <label className="flex">
                        <input type="checkbox"/>
                        S7
                    </label>
                </div>
                <div className="flex flex-col w-full">
                    {obj.slice(1,5).map((flight: any) => {
                        return (
                            <div key={flight.flightToken}>
                                <div className="flex flex-col items-end bg-sky-600 w-full p-4">
                                    <p>{`${parseInt(flight.flight.price.passengerPrices[0].singlePassengerTotal.amount, 10)} ₽`}</p>
                                    <p>Стоимость для одного взрослого пассажира</p>
                                </div>
                                <p>Москва, Шереметьево (SVO) Лондон, Лондон, Хитроу (HTR) </p>
                                <hr/>
                                <div className="flex">
                                    <p>20:40 18 авг. вт</p>
                                    <p>14 ч 45 мин</p>
                                    <p>20:40 18 авг. вт</p>
                                </div>
                                <div className="flex items-center">
                                    <hr className="flex-grow border-t border-gray-300 ml-7"/>
                                    <p className="text-yellow-500 mx-2">1 пересадка</p>
                                    <hr className="flex-grow border-t border-gray-300 mr-7"/>
                                </div>
                                <p>Рейс выполняет: adsfafas</p>
                                <hr className="border-t-[3px] my-3 border-sky-400"/>
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

{/*{ obj.flights.map((flight: any) => {*/
}
{/*    return (*/
}
{/*        <div className="border-black border-2" key={flight.flightToken}>*/
}
{/*              <p className="text-cyan-500">{flight.flight.carrier.caption}</p>*/
}
{/*              <p>{flight.flight.price.total.amount}</p>*/
}
{/*              <p>{flight.flight.price.total.currency}</p>*/
}
{/*              <p>{flight.flight.legs[0].segments[0].departureCity.caption}</p>*/
}
{/*              <p>{flight.flight.legs[0].segments[0].arrivalCity.caption}</p>*/
}
{/*              <p>{flight.flight.legs[0].segments[0].departureDate}</p>*/
}
{/*              <p>{flight.flight.legs[0].segments[0].arrivalDate}</p>*/
}
{/*              <p>{flight.flight.legs[0].segments[0].airline.caption}</p>*/
}
{/*              <p>{flight.flight.legs[0].segments[0].aircraft.caption}</p>*/
}
{/*              <p>{flight.flight.legs[0].segments[0].flightNumber}</p>*/
}
{/*              <p>{flight.flight.legs[0].segments[0].duration}</p>*/
}
{/*              <p>{flight.flight.legs[0].segments[0].departureTerminal}</p>*/}
{/*              <p>{flight.flight.legs[0].segments[0].arrivalTerminal}</p>*/}
{/*              <p>{flight.flight.legs[0].segments[0].departureCity.caption}</p>*/}
{/*              <p>{flight.flight.legs[0].segments[0].arrivalCity.caption}</p>*/}
{/*              <p>{flight.flight.legs[0].segments[0].departureDate}</p>*/}
{/*              <p>{flight.flight.legs[0].segments[0].arrivalDate}</p>*/}
{/*              <p>{flight.flight.legs[0].segments[0].airline.caption}</p>*/}
{/*              <p>{flight.flight.legs[0].segments[0].aircraft.caption}</p>*/}
{/*              <p>{flight.flight.legs[0].segments[0].flightNumber}</p>*/}
{/*              <p>{flight.flight.legs[0].segments[0].duration}</p>*/}
{/*              <p>{flight.flight.legs[0].segments[0].departureTerminal}</p>*/}
{/*        </div>*/}
{/*    )*/}
{/*})}*/}