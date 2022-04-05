import React, {useState} from "react"
import {tableRows} from '../../Mocks/tableData'
import Modal from '../Modal'
import EditForm from '../EditForm'
import './style.css'

const THead = () => {
  return (
    <thead className='thead__container'>
    <tr className='thead__line'>
      {Object.values(tableRows).map((row, key) => <th
        className='thead__row_name'
        key={row.title + key}
        style={{maxWidth: row.maxWidth}}
      >
        {row.title}
      </th>)}
    </tr>
    </thead>
  )
}

const TBody = ({tableLines, handleChangeEditData}) => {
  return (
    <tbody className='body__container'>
      {tableLines && tableLines.map((tableLine, tableLineKey) => <tr className='table__row_container' key={JSON.stringify(tableLine) + tableLineKey}>
        {Object.keys(tableLine).map((item, itemKey) => <td className='table__data_string' key={item + itemKey}>
          {tableRows[item].content(tableLine[item], handleChangeEditData(tableLine))}
        </td>)}
      </tr>)}
    </tbody>
  )
}

const Table = ({onEditTable, ...props}) => {
  const [editData, setEditData] = useState(null)
  const handleChangeEditData = (value) => () => setEditData(() => value)
  return (
    <>
    <table className='table__container'>
      <THead/>
      <TBody editData={editData} setEditData={setEditData} handleChangeEditData={handleChangeEditData} {...props}/>
    </table>
    <Modal isOpen={editData} setIsOpenModal={handleChangeEditData(null)}>
      <EditForm initialState={editData} onCloseEditForm={handleChangeEditData(null)} onEditTable={onEditTable}/>
    </Modal>
    </>
  )
}

export default Table