import {TableRows, tableData} from "../../Mocks/tableData"
import React from "react"
import Modal from '../Modal'
import Editing from '../Editing/index'
import Notification from '../Notification/index'
import {useState, useCallback} from 'react'


function SearchMedium(_props) {
  return (
    <div className="search-medium">
      {newFunction()}
    </div>
  );
  function newFunction() {
    return <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Vector">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.41905 8.68333C7.22318 8.68333 8.68571 7.2208 8.68571 5.41667C8.68571 3.61254 7.22318 2.15 5.41905 2.15C3.61492 2.15 2.15238 3.61254 2.15238 5.41667C2.15238 7.2208 3.61492 8.68333 5.41905 8.68333ZM5.41905 10.0833C7.99638 10.0833 10.0857 7.994 10.0857 5.41667C10.0857 2.83934 7.99638 0.75 5.41905 0.75C2.84172 0.75 0.75238 2.83934 0.75238 5.41667C0.75238 7.994 2.84172 10.0833 5.41905 10.0833Z" fill="#BABDCD" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.83839 7.83601C8.11176 7.56264 8.55497 7.56264 8.82834 7.83601L11.5472 10.5549C11.8206 10.8282 11.8206 11.2714 11.5472 11.5448C11.2738 11.8182 10.8306 11.8182 10.5572 11.5448L7.83839 8.82596C7.56502 8.55259 7.56502 8.10938 7.83839 7.83601Z" fill="#BABDCD" />
      </g>
    </svg>;
  }
}

function MediaLine(props) {
  const { children } = props;
  return (
    <div className="primary">
      <div className="p-33 roboto-medium-white-10px">
        {children}
      </div>
    </div>
  );
}

function ColumnTable(props) {
  const { p, p2, p3, p4, p5, p6, p7, p22, p8 } = props;

  return (
    <div className="table-header-new">
      <div className="columns-name-8">
        <div className="p-1 valign-text-middle roboto-medium-topaz-10px">
          {p}
        </div>
      </div>
      <div className="columns-name-9">
        <div className="p-2 valign-text-middle roboto-medium-topaz-10px">
          {p2}
        </div>
      </div>
      <div className="columns-name">
        <div className="p-3 valign-text-middle roboto-medium-topaz-10px">
          {p3}
        </div>
      </div>
      <div className="columns-name-2">
        <div className="p-4 valign-text-middle roboto-medium-topaz-10px">
          {p4}
        </div>
      </div>
      <div className="columns-name-3">
        <div className="p-5 valign-text-middle roboto-medium-topaz-10px">
          {p5}
        </div>
      </div>
      <div className="columns-name-4">
        <div className="p-6 valign-text-middle roboto-medium-topaz-10px">
          {p6}
        </div>
      </div>
      <div className="columns-name-5">
        <div className="p-7 valign-text-middle roboto-medium-topaz-10px">
          {p7}
        </div>
      </div>
      <div className="columns-name-6">
        <div className="p-2-1 valign-text-middle roboto-medium-topaz-10px">
          {p22}
        </div>
      </div>
      <div className="columns-name-7">
        <div className="p-8 valign-text-middle roboto-medium-topaz-10px">
          {p8}
        </div>
      </div>
    </div>
  );
}

function newFunction_1() {
  return <svg width="1280" height="1" viewBox="0 0 1280 1" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="0.683594" x2="1280" y2="0.683594" stroke="#E8E8EF" strokeWidth="0.632812" />
  </svg>;
}

function X2Items1PageNumber2Selected(props) {
  const { children, className } = props;
  return (
    <div className={`items-1-page-number-2-selected ${className || ""}`}>
      <div className="p-number valign-text-middle roboto-medium-eerie-black-10px">
        {children}
      </div>
    </div>
  );
}

function TableLine(props) {
  const {
    text15,
    httpsTelegramMeVyzvon179641,
    address,
    address2,
    address3,
    phone,
    text16,
    className,
    handleOpenEditModal
  } = props;

  const handleOpenEditModalCb = useCallback(() => {
    handleOpenEditModal(true)
  }, [handleOpenEditModal])
  return (
    <div className={`frame81512813 ${className || ""}`}>
      <div className="frame81512819">
        <div className="overlap-group">
          <div className="p-9 roboto-normal-eerie-black-12px">
            {text15}
          </div>
          <div className="httpstelegrammevyzvon179641 roboto-normal-blueberry-12px">
            {httpsTelegramMeVyzvon179641}
          </div>
        </div>
        <div className="overlap-group-1 roboto-normal-eerie-black-12px">
          <div className="p12-099">
            {address}
          </div>
          <div className="p1-348-094">
            {address2}
          </div>
        </div>
        <div className="p1-348-094-1 roboto-normal-eerie-black-12px">
          {address3}
        </div>
        <div className="p-218-464-443 roboto-normal-slimy-green-12px">
          {phone}
        </div>
        <div className="p-3-1 roboto-normal-eerie-black-12px">
          {text16}
        </div>
        <div className="edit" onClick={handleOpenEditModalCb}>
          {newFunction()}
        </div>
      </div>

      {newFunction_1()}

    </div>
  );
  function newFunction() {
    return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.33331 0.333313C1.22874 0.333313 0.333313 1.22874 0.333313 2.33331V11.3333C0.333313 12.4379 1.22874 13.3333 2.33331 13.3333H11C12.1045 13.3333 13 12.4379 13 11.3333V8.99998C13 8.63179 12.7015 8.33331 12.3333 8.33331C11.9651 8.33331 11.6666 8.63179 11.6666 8.99998V11.3333C11.6666 11.7015 11.3682 12 11 12H2.33331C1.96512 12 1.66665 11.7015 1.66665 11.3333V2.33331C1.66665 1.96512 1.96512 1.66665 2.33331 1.66665H7.66665C8.03484 1.66665 8.33331 1.36817 8.33331 0.99998C8.33331 0.63179 8.03484 0.333313 7.66665 0.333313H2.33331ZM3.66659 9.27181L3.88128 7.47932L9.80113 2.82585L11.3789 4.83303L5.45908 9.4865L3.66659 9.27181ZM13.0119 2.93889C13.176 3.14764 13.1399 3.44878 12.9312 3.61287L11.9517 4.38284L10.3738 2.37565L11.3534 1.60568C11.5621 1.44159 11.8632 1.47766 12.0273 1.68641L13.0119 2.93889Z" fill="#5E35B1" />
    </svg>;
  }
}

const TableHeader = () => {
  return <div className="frame81512811">
    <div className="atom-large">
      <SearchMedium
        src="vector.svg"
      />
      <div className="value">
        Поиск
      </div>
    </div>
    <div className="frame2511">
      <MediaLine>СМИ</MediaLine>
      <div className="primary-2">
        <div className="p-13 roboto-medium-plump-purple-10px">
          Соцсети
        </div>
      </div>
      <div className="primary-3">
        <div className="p-14 roboto-medium-white-10px">
          Телеграм
        </div>
      </div>
      <div className="primary-4">
        <div className="p-15 roboto-medium-plump-purple-10px">
          Оппозиция
        </div>
      </div>
      <div className="primary-5">
        <div className="p-16 roboto-medium-topaz-10px">
          Отобразить все
        </div>
      </div>
    </div>
  </div>
}

const Table = () => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false)

  const handleCloseEditModal = useCallback(() => {
    setIsOpenEditModal(false)
  }, [setIsOpenEditModal])

  const handleCloseConfirmModal = useCallback(() => {
    setIsOpenConfirmModal(false)
  }, [setIsOpenConfirmModal])

  return <div className="spravochnik-istochniki a-a">
    <TableHeader/>
    <ColumnTable {...TableRows} />
    <div className="frame81512815">
      {tableData().map((line, key) => <TableLine key={key} {...line} handleOpenEditModal={setIsOpenEditModal}/>)}
    </div>
    <div className="overlap-group2">
      <div className="pagination">
        <div className="pages">
          <X2Items1PageNumber2Selected>1</X2Items1PageNumber2Selected>
          <div className="items-1-page-number-1-default">
            <div className="overlap-group-2">
              <div className="p-number-2 valign-text-middle roboto-medium-white-10px">
                2
              </div>
            </div>
          </div>
          <X2Items1PageNumber2Selected
            className="items-1-page-number-1-default-2"
          >
            3
          </X2Items1PageNumber2Selected>
          <X2Items1PageNumber2Selected
            className="items-1-page-number-1-default-3"
          >
            4
          </X2Items1PageNumber2Selected>
          <div className="items-1-page-number-1-default-4">
            <div className="p-number-5 valign-text-middle roboto-medium-eerie-black-10px">
              ...
            </div>
          </div>
          <div className="items-1-page-number-1-default-5">
            <div className="p-number-6 valign-text-middle roboto-medium-eerie-black-10px" >
              20
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal isOpen={isOpenEditModal} setIsOpenModal={handleCloseEditModal}>
      <Editing onClose={handleCloseEditModal} onOpenConfirmModal={setIsOpenConfirmModal}/>
    </Modal>

    <Modal isOpen={isOpenConfirmModal} setIsOpenModal={handleCloseConfirmModal}>
      <Notification setIsOpenModal={handleCloseConfirmModal}/>
    </Modal>
  </div>
}

export default Table