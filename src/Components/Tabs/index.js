import React from "react"
import {connect} from 'react-redux'
import {tabListSelector, activeTabsSelector, setActiveTabs} from '../../redux/sources'
import './style.css'

const Tabs = ({tabList, activeTabs, setActiveTabs}) => {
  console.log(tabList, activeTabs)
  return (
    <div className='tablist__container'>
      {tabList && tabList.map((tab, tabKey) => {
        const isActive = activeTabs.find(f => f === tab)
        return <button className={isActive ? "button__btn active" : "button__btn"}
          key={tabKey + tab}
          onClick={() => {
            if(!activeTabs.find(f => f === tab)){
              setActiveTabs([...activeTabs, tab])
            } else {
              setActiveTabs(activeTabs.filter(f => f !== tab))
            }
          }}
          style={{backgroundColor: activeTabs.find(f => f === tab) ? "#5E35B1" : "rgba(94, 53, 177, 0.1)"}}
        >
          {tab}
        </button>
      })}
    </div>
  )
}

export default connect((store) => ({
  tabList: tabListSelector(store),
  activeTabs: activeTabsSelector(store),
}), {setActiveTabs})(Tabs)