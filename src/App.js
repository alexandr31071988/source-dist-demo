import React, {useCallback, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getSourceList, editSourceList, sourceListSelector, pageLimitSelector, pageNumberSelector, editPageLimit, editPageNumber} from './redux/sources'

import {getTableData} from './Mocks/tableData'

import Table from './Components/Table'
import Header from './Components/Header'
import Pagination from './Components/Pagination'

function App({getSourceList, sourceList, editSourceList, limit, page, editPageLimit, editPageNumber}) {

  useEffect(() => {
    getSourceList(5, 1)
  },[])

  const handleChangePagination = useCallback((e) => {
    const pageN = Number(e.target.innerText)
    editPageNumber(pageN)
  }, [editPageNumber, limit, editSourceList])

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

      <Header setTableData={editSourceList} pagLimit={limit} pagPage={page}/>
      <Table tableLines={sourceList} onEditTable={handleEditSource}/>
      <Pagination currentPage={page} countPages={getTableData(limit, page)[1]} handleChangePagination={handleChangePagination}/>
    </main>
  )
}

export default connect(
  (store) => ({
    sourceList: sourceListSelector(store),
    limit: pageLimitSelector(store),
    page: pageNumberSelector(store)
  }),
  {getSourceList, editSourceList, editPageLimit, editPageNumber})(App)
