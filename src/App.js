import React, {useCallback, useState} from 'react'

import {getTableData} from './Mocks/tableData'

import Table from './Components/Table'
import Tabs from './Components/Tabs'
import Search from './Components/Search'
import Pagination from './Components/Pagination'

function App() {
  const [pagPage, setPagPage] = useState(1)
  const [pagLimit, setPagLimit] = useState(5)
  const [tableData, setTableData] = useState(getTableData(pagLimit, pagPage)[0])

  const [activeTabs, setActiveTabs] = useState([])
  const [searchTitle, setSearchTitle] = useState('')

  const handleTabAction = useCallback((filteredValues) => {
    console.log(filteredValues)
    const filteredTableData = getTableData[0](pagLimit, pagPage).filter(f => {
      if(filteredValues.find(tab => f.sourceType === tab)) {
        return true
      }
      return false
    })
    console.log(filteredTableData)
    setTableData(filteredTableData)
  }, [setTableData])

  const resetFilters = useCallback(() => {
    setTableData(getTableData[0](pagLimit, pagPage))
    setActiveTabs([])
    setSearchTitle("")
  }, [setTableData])

  const handleSearch = useCallback((e) => {
    const searchedTitle = e.target.value
    setSearchTitle(searchedTitle)
    setTableData(() => {
      return getTableData[0](pagLimit, pagPage).filter(f => f.sourceName.includes(searchedTitle))
    })
  }, [setSearchTitle, setTableData])

  const tabList = [
    {name: "СМИ", action: handleTabAction},
    {name: "Соцсети", action: handleTabAction},
    {name: "Телеграм", action: handleTabAction},
    {name: "Оппозиция", action: handleTabAction}
  ]

  const handleChangePagination = useCallback((e) => {
    console.log("eee")
    const pageN = Number(e.target.innerText)
    setPagPage(pageN)
    setTableData(getTableData(pagLimit, pageN)[0])
  }, [setPagPage, pagLimit, setTableData])

  return (
    <main className='main__container'>
      <header>
        <Search setSearchTitle={setSearchTitle} searchTitle={searchTitle} handleSearch={handleSearch}/>
        <Tabs tabList={tabList} activeTabs={activeTabs} setActiveTabs={setActiveTabs}/>
        <button className="clear-btn" onClick={resetFilters}>Отобразить все</button>
      </header>

      <Table tableLines={tableData} />
      <Pagination currentPage={pagPage} countPages={getTableData(pagLimit, pagPage)[1]} handleChangePagination={handleChangePagination}/>
    </main>
  )
}

export default App
