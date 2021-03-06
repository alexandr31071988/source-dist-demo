import React, {Component} from "react"


class Notification extends Component {

  render() {
    return (
      <Changes
        pp="Вы уверены, что хотите сохранить изменения?"
        pp2="Теперь вклад этого источника в охват Инфоповодов всегда будет равен N?"
        atomLargeProps={changesData.atomLargeProps}
        buttonlargedefaultDefaultProps={changesData.buttonlargedefaultDefaultProps}
        {...this.props}
      />
    )
  }
}

export default Notification

function Changes(props) {
  const {pp, pp2, atomLargeProps, buttonlargedefaultDefaultProps, setIsOpenModal} = props

  return (
    <div className="container-center-horizontal-2">
      <div className="uvedomlenie screen">
        <div className="frame-81512684">
          <div className="pp roboto-medium-mine-shaft-20px">
            {pp}
          </div>
          <p className="pp2">
            {pp2}
          </p>
        </div>
        <div className="frame-1712">
          <AtomLarge setIsOpenModal={setIsOpenModal}>{atomLargeProps.children}</AtomLarge>
          <ButtonlargedefaultDefault
            atomLarge2Props={buttonlargedefaultDefaultProps.atomLarge2Props}
          />
        </div>
      </div>
    </div>
  )
}


function AtomLarge(props) {
  const {children, setIsOpenModal} = props

  return (
    <div className="atom-large-5 border-1px-gray-suit">
      <div className="x15" onClick={setIsOpenModal}>
        {children}
      </div>
    </div>
  )
}


function ButtonlargedefaultDefault(props) {
  const {atomLarge2Props} = props

  return (
    <div className="buttonlargedefault-default">
      <AtomLarge2>{atomLarge2Props.children}</AtomLarge2>
    </div>
  )
}


function AtomLarge2(props) {
  const {children} = props

  return (
    <div className="atom-large-6">
      <div className="text-3">
        {children}
      </div>
    </div>
  )
}

const atomLargeData = {
  children: "Отменить",
}

const atomLarge2Data = {
  children: "Сохранить",
}

const buttonlargedefaultDefaultData = {
  atomLarge2Props: atomLarge2Data,
}

const changesData = {
  atomLargeProps: atomLargeData,
  buttonlargedefaultDefaultProps: buttonlargedefaultDefaultData,
}
