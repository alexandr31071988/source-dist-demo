import React from "react"
import {tableRows, tableLines} from '../../Mocks/tableData'

const THead = () => {
  return(
    <thead className='thead__head'>
      <tr>
        {tableRows.map((rowName, key) => <th key={rowName + key}>{rowName}</th>)}
      </tr>
    </thead>
  )
}

const TBody = () => {

  return(
    <tbody>
    {tableLines.map((tableLine, tableLineKey) => <tr key={JSON.stringify(tableLine) + tableLineKey}>
      {Object.keys(tableLine).map((item, itemKey) => <td key={item + itemKey}>{item}</td>)}
    </tr>)}
    </tbody>
  )
}

const Table = () => {

  return(
    <table className='table__container'>
      <THead/>
      <TBody/>
    </table>
  )
}

export default Table