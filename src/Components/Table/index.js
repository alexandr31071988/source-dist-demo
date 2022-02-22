import React from "react"
import {tableRows} from '../../Mocks/tableData'

import './style.css'

const THead = () => {
  return(
    <thead className='thead__container'>
      <tr className='thead__line'>
        {Object.values(tableRows).map((row, key) => <th className='thead__row_name' key={row.title + key}>{row.title}</th>)}
      </tr>
    </thead>
  )
}

const TBody = ({tableLines}) => {

  return(
    <tbody className='body__container'>
    {tableLines && tableLines.map((tableLine, tableLineKey) => <tr className='table__row_container' key={JSON.stringify(tableLine) + tableLineKey}>
      {Object.keys(tableLine).map((item, itemKey) => <td className='table__data_string' key={item + itemKey}>{tableRows[item].content(tableLine[item])}</td>)}
    </tr>)}
    </tbody>
  )
}

const Table = ({...props}) => {

  return(
    <table className='table__container'>
      <THead/>
      <TBody {...props}/>
    </table>
  )
}

export default Table