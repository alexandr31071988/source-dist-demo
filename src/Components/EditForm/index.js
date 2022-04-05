import {Formik} from 'formik'
import CloseIcon from '../../assets/closeIcon.svg'
import './style.scss'
import Modal from "../Modal";
import React, {useState, useCallback} from "react"
import Confirm from "../Confirm";
import Switcher from '../../UI/Switcher'


const validate = values => {
  const errors = {};
  if (!values.sourceName) values.sourceName = "sourceName is required"
  if (!values.capacity) values.capacity = "capacity is required"
  return errors;
}

const EditForm = ({initialState, onCloseEditForm, onEditTable}) => {
  const [isOpenConfirm, setIsOpenConfirm] = useState(false)


  return (
    <>
      <div className="edit-form-title"><h1>Редактировать источник</h1> <img src={CloseIcon} onClick={onCloseEditForm}/></div>
      <Formik
        initialValues={initialState}
        validate={validate}
        onSubmit={(values, {setSubmitting}) => {
          //onEditTable(values)
          setSubmitting(false)
          setIsOpenConfirm(true)
          //onCloseEditForm()
        }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => {

          const handleCloseConfirmModal = () => setIsOpenConfirm(false)
          return (
            <form onSubmit={handleSubmit}>
              <div className='name-of-the-source'>Название источника<span> *</span></div>
              <input
                type="text"
                name="sourceName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sourceName}
              />
              {errors.sourceName && touched.sourceName && errors.sourceName}
              <div className='editorial-coverage'>Редакционный охват<span> *</span></div>
              <input
                type="text"
                name="capacity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.capacity}
              />
              {errors.capacity && touched.capacity && errors.capacity}
              <label className='opposition item'>Оппозиция <Switcher defaultValue={values.isOpposition} callback={handleChange} name="isOpposition"/></label>

              {errors.isOpposition && touched.isOpposition && errors.isOpposition}
              <div className='the-original-source item'>Первоисточник <Switcher defaultValue={values.origin} callback={handleChange} name="origin"/></div>

            
              {errors.origin && touched.origin && errors.origin}
              <button type="Submit" disabled={isSubmitting}>
                Сохранить
              </button>
              <Modal isOpen={isOpenConfirm} setIsOpenModal={handleCloseConfirmModal}>
                <Confirm
                  values={values}
                  onEditTable={onEditTable}
                  setIsOpenModal={handleCloseConfirmModal}
                  onCloseEditForm={onCloseEditForm}
                  initialState={initialState}
                />
              </Modal>
            </form>
          )
        }}
      </Formik>

    </>
  )
}

export default EditForm