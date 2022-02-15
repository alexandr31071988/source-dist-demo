import React from "react"
import {tableRows, tableLines} from '../../Mocks/tableData'

const THead = () => {
  return(
    <thead>
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
    <table>
      <THead/>
      <TBody/>
    </table>
  )
}

export default Table