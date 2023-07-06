import { useState } from "react"
import { Tab } from "./Tab"
import { TabPanel } from "./TabPanel"

export const TabsH = ({ tabs }) => {
  const [ activeTab, setActiveTab ] = useState(tabs[0].id)

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return(
    <div className="tabs-system">
      <div className="tab-list">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)} />
        ))}
      </div>
      <div className="tab-panels">
        {tabs.map((tab) => (
          <TabPanel key={tab.id} isActive={activeTab === tab.id}>
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </div>
  )

}