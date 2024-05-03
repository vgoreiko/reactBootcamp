import { tabsContentStub } from './tabs-content-stub';
import { useState } from "react";

export function TabsComponent(props: { title: string, activeIndex: number, tabTitles: string[]}) {
  const tabs: string[][] = tabsContentStub;
  const [activeTabIndex, setActiveTabIndex] = useState(props.activeIndex);
  const tab = tabs[activeTabIndex];
  const tabTitles = props.tabTitles;

  const onTabClicked = (index: number) => {
    setActiveTabIndex(index);
  }

  return <section className='Tab-List'>
    <h1 className={'text-3xl font-bold underline'}>{props.title}</h1>
    <ul className={'TabTitles flex gap-0.5'}>
      {tabTitles.map((item, index) => {
        return <li key={index}
                   onClick={onTabClicked.bind(null, index)}
                   className={`TabTitle bg-slate-700 rounded-t-lg text-white p-2 text-sm cursor-pointer
                   ${index === activeTabIndex ? 'active bg-cyan-400 cursor-default' : null}`}>
          {item}
        </li>
      })}
    </ul>
    <ul className={'TabList'}>
      <li key={activeTabIndex}>{tab.map((t, i) => `${t} `)}</li>
    </ul>
  </section>;
}
