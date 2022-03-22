import React, {useCallback, memo, useMemo} from "react"
import './style.scss'

const compareObject = (o1, o2) => {
  const result = []
  Object.keys(o1).forEach((item, key) => {
    if(o1[item] !== o2[item]) {
      result.push({name: item, value: o1[item]})
    }
  })

  return result
}


const Confirm = ({values, onEditTable, setIsOpenModal, onCloseEditForm, initialState}) => {

  const handleConfirmChanges = useCallback(() => {
    onEditTable(values)
    setIsOpenModal()
    onCloseEditForm()
  }, [])

  const memoDiff = useMemo(() => compareObject(values, initialState), [values])

  return (
    <main className="confirm__container">
      <h1>Вы уверены, что хотите сохранить изменения? </h1>
      {memoDiff.map((item, key) => <div key={item.value + key} className="confirm__changes">Теперь {item.name} всегда будет равен {item.value}?</div>)}

      <section className="confirm__buttons">
        <button className="button__btn" onClick={setIsOpenModal}>Отменить</button>
        <button className="button__btn active" onClick={handleConfirmChanges}>Сохранить</button>
      </section>
    </main>
  )
}

export default memo(Confirm)
