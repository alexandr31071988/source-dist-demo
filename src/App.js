import React, {useCallback, useState} from 'react'

import {tableLines} from './Mocks/tableData'

import Table from './Components/Table'
import Tabs from './Components/Tabs'

import './index.css'


function App() {
  const [tableData, setTableData] = useState(tableLines)

  const handleTabAction = useCallback((filteredValues) => {
    const filteredTableData = tableLines.filter(f => {
      if(filteredValues.find(tab => f.sourceType === tab)) {
        return true
      }
      return false
    })
    setTableData(filteredTableData)
  }, [setTableData])

  const tabList = [
    {name: "СМИ", action: handleTabAction},
    {name: "Соцсети", action: handleTabAction},
    {name: "Телеграм", action: handleTabAction},
    {name: "Оппозиция", action: handleTabAction}
  ]

  return (
    <main className='main__container'>
      <Tabs tabList={tabList}/>
      <Table tableLines={tableData}/>
    </main>
  )
}

export default App
