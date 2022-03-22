import {Formik} from 'formik'
import CloseIcon from '../../assets/closeIcon.svg'
import './style.scss'
import Modal from "../Modal";
import React, {useState, useCallback} from "react"
import Confirm from "../Confirm";

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
      <div className="edit-form-title"><h1>Edit Source</h1> <img src={CloseIcon} onClick={onCloseEditForm}/></div>
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
              <input
                type="text"
                name="sourceName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sourceName}
              />
              {errors.sourceName && touched.sourceName && errors.sourceName}
              <input
                type="text"
                name="capacity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.capacity}
              />
              {errors.capacity && touched.capacity && errors.capacity}

              <input
                type="checkbox"
                name="isOpposition"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.isOpposition}
              />
              {errors.isOpposition && touched.isOpposition && errors.isOpposition}

              <input
                type="checkbox"
                name="origin"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.origin}
              />
              {errors.origin && touched.origin && errors.origin}
              <button type="submit" disabled={isSubmitting}>
                Submit
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