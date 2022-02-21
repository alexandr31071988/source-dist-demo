import React, {useState} from "react"

import './style.css'

const Tabs = ({tabList}) => {
  const [activeTabs, setActiveTabs] = useState([])

  return (
    <div className='tablist__container'>
      {tabList && tabList.map((tab, tabKey) => {
        return <button className="button__btn"
          key={tabKey + tab.name}
          onClick={() => {
            if(!activeTabs.find(f => f === tab.name)){
              setActiveTabs(preTabs => {
                const newData = [...preTabs, tab.name]
                tab.action(newData)
                return newData
              })
            } else {
              setActiveTabs(preTabs => {
                const newData = preTabs.filter(f => f !== tab.name)
                tab.action(newData)
                return newData
              })
            }
          }}
          style={{backgroundColor: activeTabs.find(f => f === tab.name) ? "#5E35B1" : "#fff"}}
        >
          {tab.name}
        </button>
      })}
    </div>
  )
}

export default Tabs