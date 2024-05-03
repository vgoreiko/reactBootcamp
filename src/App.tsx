import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { TabsComponent } from './tabs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt={'Logo'}/>
      </header>
      <TabsComponent title={'Bla'}></TabsComponent>
    </div>
  );
}

export default App;
