import React, {useCallback} from "react"
import './styles.scss'

const PaginationItem = ({handleChangePagination, children}) => {
  return (<div className="item" onClick={handleChangePagination}>{children}</div>)
}

const Pagination = ({currentPage, countPages, handleChangePagination}) => {
  return <section className="pagination__container">
    {currentPage !== 1 && <PaginationItem handleChangePagination={handleChangePagination}>1</PaginationItem>}
    {currentPage > 1 && currentPage !== 2 && <PaginationItem handleChangePagination={handleChangePagination}>{currentPage - 1}</PaginationItem>}
    <div className="item active">{currentPage}</div>
    {(currentPage < countPages && currentPage !== countPages - 1 )&& <PaginationItem handleChangePagination={handleChangePagination}>{currentPage + 1}</PaginationItem>}
    {currentPage !== countPages && <PaginationItem handleChangePagination={handleChangePagination}>{countPages}</PaginationItem>}
  </section>
}


export default Pagination