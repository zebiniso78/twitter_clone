import React from 'react';
import './App.scss';

import LeftSidebar from './Components/LeftSidebar/LeftSidebar';
import Main from './Components/Main/Main';
import RightSidebar from './Components/RightSidebar/RightSidebar';

function App() {

 return<> 

    <div className="container">
    <LeftSidebar />
    <Main />
    <RightSidebar />
    </div>

 </>;
 
}

export default App;