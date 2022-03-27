import React, {useCallback, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getSourceList, editSourceList, sourceListSelector} from './redux/sources'

import {getTableData} from './Mocks/tableData'

import Table from './Components/Table'
import Header from './Components/Header'
import Pagination from './Components/Pagination'

function App({getSourceList, sourceList, editSourceList}) {
  const [pagPage, setPagPage] = useState(1)
  const [pagLimit, setPagLimit] = useState(5)

  useEffect(() => {
    getSourceList(5, 1)
  },[])

  const handleChangePagination = useCallback((e) => {
    const pageN = Number(e.target.innerText)
    setPagPage(pageN)
    editSourceList(getTableData(pagLimit, pageN)[0])
  }, [setPagPage, pagLimit, editSourceList])

  const handleEditSource = useCallback((newField) => {
    editSourceList(sourceList.map((item) => {
      if(item.edit === newField.edit) {
        return newField
      }
      return item
    }))
  }, [sourceList, sourceList.length])

  return (
    <main className='main__container'>

      <Header setTableData={editSourceList} pagLimit={pagLimit} pagPage={pagPage}/>
      <Table tableLines={sourceList} onEditTable={handleEditSource}/>
      <Pagination currentPage={pagPage} countPages={getTableData(pagLimit, pagPage)[1]} handleChangePagination={handleChangePagination}/>
    </main>
  )
}

export default connect(
  (store) => ({sourceList: sourceListSelector(store)}),
  {getSourceList, editSourceList})(App)
