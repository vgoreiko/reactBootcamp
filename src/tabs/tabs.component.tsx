import { tabsContentStub } from './tabs-content-stub';
import { useState } from "react";
import {TabComponent} from "./tab.component";

export function TabsComponent(props: { activeIndex: number, tabTitles: string[]}) {
  const tabs: string[][] = tabsContentStub;
  const [activeTabIndex, setActiveTabIndex] = useState(props.activeIndex);
  const tab = tabs[activeTabIndex];
  const tabTitles = props.tabTitles;

  const onTabClicked = (index: number) => {
    setActiveTabIndex(index);
  }

  return <section className='Tab-List'>
    <ul className={'TabTitles flex gap-0.5'}>
      {tabTitles.map((item, index) => {
        return (
          <TabComponent
            onClick={onTabClicked.bind(null, index)}
            isActive={index === activeTabIndex}
            key={index}
          >
            {item}
        </TabComponent>
        )
      })}
    </ul>
    <ul className={'TabList'}>
      <li key={activeTabIndex}>{tab.map((t, i) => `${t} `)}</li>
    </ul>
  </section>;
}
