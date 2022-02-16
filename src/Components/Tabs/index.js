import React, {useState} from "react"

const Tabs = ({tabList}) => {
  const [activeTabs, setActiveTabs] = useState([])

  return (
    <div>
      {tabList && tabList.map((tab, tabKey) => {
        return <button
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
          style={{backgroundColor: activeTabs.find(f => f === tab.name) ? "#ccc" : "#fff"}}
        >
          {tab.name}
        </button>
      })}
    </div>
  )
}

export default Tabs