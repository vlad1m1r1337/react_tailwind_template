export const Sorting = () => {
    return (
        <div>
            <div className="w-full h-8 bg-gray-300"/>
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
            <div className="w-full h-28 bg-gray-300"/>
        </div>
    )
}