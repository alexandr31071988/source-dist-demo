import Tabs from '../Tabs'
import Search from '../Search'
import React, {useCallback, useState, useMemo} from "react";
import {getTableData} from "../../Mocks/tableData";


const Header = ({setTableData, pagLimit, pagPage}) => {
    const [activeTabs, setActiveTabs] = useState([])
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
        setActiveTabs([])
        setSearchTitle("")
    }, [setTableData, pagPage, pagLimit])

    const handleSearch = useCallback((e) => {
        const searchedTitle = e.target.value
        setSearchTitle(searchedTitle)
        setTableData(() => {
            return getTableData(pagLimit, pagPage)[0].filter(f => f.sourceName.includes(searchedTitle))
        })
    }, [setSearchTitle, setTableData, pagLimit, pagPage])

    const tabList = useMemo(() => [
        {name: "СМИ", action: handleTabAction},
        {name: "Соцсети", action: handleTabAction},
        {name: "Телеграм", action: handleTabAction},
        {name: "Оппозиция", action: handleTabAction}
    ], [handleTabAction])

    return (
        <header>
            <Search setSearchTitle={setSearchTitle} searchTitle={searchTitle} handleSearch={handleSearch}/>
            <Tabs tabList={tabList} activeTabs={activeTabs} setActiveTabs={setActiveTabs}/>
            <button className="clear-btn" onClick={resetFilters}>Отобразить все</button>
        </header>
    )
}

export default Header