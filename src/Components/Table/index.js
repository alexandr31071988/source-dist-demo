import React from "react"
import {tableRows} from '../../Mocks/tableData'

const THead = () => {
  return(
    <thead className='thead__container'>
      <tr className='thead__line'>
        {tableRows.map((rowName, key) => <th className='thead__row_name' key={rowName + key}>{rowName}</th>)}
      </tr>
    </thead>
  )
}

const TBody = ({tableLines}) => {

  return(
    <tbody>
    {tableLines && tableLines.map((tableLine, tableLineKey) => <tr key={JSON.stringify(tableLine) + tableLineKey}>
      {Object.keys(tableLine).map((item, itemKey) => <td key={item + itemKey}>{tableLine[item]}</td>)}
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