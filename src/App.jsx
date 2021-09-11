import React from 'react';
import './App.scss';

import LeftSidebar from './Components/LeftSidebar/LeftSidebar';
import Main from './Components/Main/Main';
import RightSidebar from './Components/RightSidebar/RightSidebar';

import changeTheme from '../src/Hooks/SetTheme'

function App() {
  const [theme] = changeTheme();
 return<> 

    <div className={`container ${theme}`}>
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </div>

 </>; 
}

export default App;