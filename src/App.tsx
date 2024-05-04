import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { TabsComponent } from './tabs';

function App() {
  const tabTitles: string[] = ['Why React?', 'Core Features', 'Related Resources'];
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo w-1/6 h-1/6" src={logo} alt={'Logo'}/>
      </header>
      <TabsComponent activeIndex={0} tabTitles={tabTitles}></TabsComponent>
    </div>
  );
}

export default App;
