import {Sort} from "./Sort.tsx";
import {FilterTransfer} from "./FilterTransfer.tsx";

export const SortFilter = () => {
    return (
        <div>
            <div className="w-full h-8 bg-gray-300"/>
            <div className="p-4">
                <Sort />
                <FilterTransfer />
                <h2 className="py-3 font-medium">Цена</h2>
                <label className="flex">
                    От
                    <input className="border" type="number"/>
                </label>
                <label className="flex mt-3">
                    До
                    <input className="border" type="number"/>
                </label>
                <h2 className="py-3 font-medium">Авиакомпании</h2>
                <label className="flex">
                    <input type="checkbox"/>
                    Aeroflot
                </label>
                <label className="flex">
                    <input type="checkbox"/>
                    S7
                </label>
            </div>
            <div className="w-full h-28 bg-gray-300"/>
        </div>
    )
}