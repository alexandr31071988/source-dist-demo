import React, {useCallback, useState} from 'react'

import {getTableData} from './Mocks/tableData'

import Table from './Components/Table'
import Header from './Components/Header'
import Pagination from './Components/Pagination'



function App() {
  const [pagPage, setPagPage] = useState(1)
  const [pagLimit, setPagLimit] = useState(5)
  const [tableData, setTableData] = useState(getTableData(pagLimit, pagPage)[0])

  const handleChangePagination = useCallback((e) => {
    const pageN = Number(e.target.innerText)
    setPagPage(pageN)
    setTableData(getTableData(pagLimit, pageN)[0])
  }, [setPagPage, pagLimit, setTableData])

  const handleEditSource = useCallback((newField) => {
    setTableData(prevData => {
      return prevData.map((item) => {
        if(item.edit === newField.edit) {
          return newField
        }
        return item
      })
    })
  }, [])


  return (
    <main className='main__container'>

      <Header setTableData={setTableData} pagLimit={pagLimit} pagPage={pagPage}/>
      <Table tableLines={tableData} onEditTable={handleEditSource}/>
      <Pagination currentPage={pagPage} countPages={getTableData(pagLimit, pagPage)[1]} handleChangePagination={handleChangePagination}/>
    </main>
  )
}

export default App
