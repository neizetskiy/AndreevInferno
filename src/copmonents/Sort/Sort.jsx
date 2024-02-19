import "./Sort.css"

export default function Sort({sorting, onSortingChange}) {
    return (
        <>
            <div className="sort">
                <div className="select">
                    <label htmlFor="filer"></label>
                    <select id="sort" value={sorting} onChange={onSortingChange}>
                        <option value="default">По умолчанию</option>
                        <option value="priceASC">По возростанию цены</option>
                        <option value="priceDESC">По убыванию цены</option>
                        <option value="nameA">По названию (A-Z)</option>
                        <option value="nameZ">По названию (Z-A)</option>
                    </select>
                </div>
            </div>
        </>
    )
}