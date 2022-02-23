import React, {useCallback, useState} from 'react'

import {tableLines} from './Mocks/tableData'

import Table from './Components/Table'
import Tabs from './Components/Tabs'
import Search from './Components/Search'

function App() {
  const [tableData, setTableData] = useState(tableLines)
  const [activeTabs, setActiveTabs] = useState([])
  const [searchTitle, setSearchTitle] = useState('')

  const handleTabAction = useCallback((filteredValues) => {
    console.log(filteredValues)
    const filteredTableData = tableLines.filter(f => {
      if(filteredValues.find(tab => f.sourceType === tab)) {
        return true
      }
      return false
    })
    console.log(filteredTableData)
    setTableData(filteredTableData)
  }, [setTableData])

  const resetFilters = useCallback(() => {
    setTableData(tableLines)
    setActiveTabs([])
    setSearchTitle("")
  }, [setTableData])

  const handleSearch = useCallback((e) => {
    const searchedTitle = e.target.value
    setSearchTitle(searchedTitle)
    setTableData(() => {
      return tableLines.filter(f => f.sourceName.includes(searchedTitle))
    })
  }, [setSearchTitle, setTableData])

  const tabList = [
    {name: "СМИ", action: handleTabAction},
    {name: "Соцсети", action: handleTabAction},
    {name: "Телеграм", action: handleTabAction},
    {name: "Оппозиция", action: handleTabAction}
  ]

  return (
    <main className='main__container'>
      <header>
        <Search setSearchTitle={setSearchTitle} searchTitle={searchTitle} handleSearch={handleSearch}/>
        <Tabs tabList={tabList} activeTabs={activeTabs} setActiveTabs={setActiveTabs}/>
        <button className="clear-btn" onClick={resetFilters}>Отобразить все</button>
      </header>

      <Table tableLines={tableData} />
    </main>
  )
}

export default App
