import Tabs from '../Tabs'
import Search from '../Search'
import React, {useCallback, useState, useMemo} from "react";
import {getTableData} from "../../Mocks/tableData";

const Header = ({setTableData, pagLimit, pagPage}) => {
    const [searchTitle, setSearchTitle] = useState('')

    const handleTabAction = useCallback((filteredValues) => {
        const filteredTableData = getTableData(pagLimit, pagPage)[0].filter(f => {
            if(filteredValues.find(tab => f.sourceType === tab)) {
                return true
            }
            return false
        })

        setTableData(filteredTableData)
    }, [setTableData, pagPage, pagLimit], )

    const resetFilters = useCallback(() => {
        setTableData(getTableData(pagLimit, pagPage)[0])
        setSearchTitle("")
    }, [setTableData, pagPage, pagLimit])

    const handleSearch = useCallback((e) => {
        const searchedTitle = e.target.value
        setSearchTitle(searchedTitle)
        setTableData(getTableData(pagLimit, pagPage)[0].filter(f => f.sourceName.includes(searchedTitle)))
    }, [setSearchTitle, setTableData, pagLimit, pagPage])

    return (
        <header>
            <Search setSearchTitle={setSearchTitle} searchTitle={searchTitle} handleSearch={handleSearch}/>
            <Tabs/>
            <button className="clear-btn" onClick={resetFilters}>Отобразить все</button>
        </header>
    )
}

export default Header