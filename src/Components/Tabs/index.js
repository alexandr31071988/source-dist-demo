import React from "react"

import './style.css'

const Tabs = ({tabList, activeTabs, setActiveTabs}) => {


  return (
    <div className='tablist__container'>
      {tabList && tabList.map((tab, tabKey) => {
        const isActive = activeTabs.find(f => f === tab.name)
        return <button className={isActive ? "button__btn active" : "button__btn"}
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
          style={{backgroundColor: activeTabs.find(f => f === tab.name) ? "#5E35B1" : "rgba(94, 53, 177, 0.1)"}}
        >
          {tab.name}
        </button>
      })}
    </div>
  )
}

export default Tabs