import {useState, useMemo} from 'react'
import './style.scss'

const Switcher = ({name, defaultValue = false, callback = () => false}) => {
  const [value, setValue] = useState(defaultValue)
  const styles = useMemo(() => ({
      "backgroundColor": value ? "#5E35B1": "#7A7C8B"
  }), [value])

  return (
    <div className="switch__container" style={styles}>
      <div
       className="switch_position"
       style={{"left":  value ? "38px" : "5px"}}
       onClick={() => {
        setValue(!value)
        callback({target: {name, value: !value}})
      }}
      ></div>
    </div>
  )
}

export default Switcher