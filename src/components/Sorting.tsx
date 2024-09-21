import {useSortStore} from "../store/useSortStore.ts";

export const Sorting = () => {
    const { sortBy, setSortBy } = useSortStore();

    return (
        <div>
            <div className="w-full h-8 bg-gray-300"/>
            <div className="p-4">
                <h2 className="py-3 font-medium">Сортировать</h2>
                <label className="flex">
                    <input
                        type="radio"
                        name="sort"
                        checked={sortBy === 'asc'}
                        onChange={() => setSortBy('asc')}
                    />
                    По возрастанию цены
                </label>
                <label className="flex">
                    <input
                        type="radio"
                        name="sort"
                        checked={sortBy === 'desc'}
                        onChange={() => setSortBy('desc')}
                    />
                    По убыванию цены
                </label>
                <label className="flex">
                    <input
                        type="radio"
                        name="sort"
                        checked={sortBy === 'time'}
                        onChange={() => setSortBy('time')}
                    />
                    По времени в пути
                </label>
                <h2 className="py-3 font-medium">Фильтровать</h2>
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