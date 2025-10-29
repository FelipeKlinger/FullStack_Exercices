const Filter = ({ handleFilter, filterName }) => {
    return (
        <div>
            filter shown with: <input type="text" value={filterName} onChange={handleFilter} />
        </div>
    )

}

export default Filter