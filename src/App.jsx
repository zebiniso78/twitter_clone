import React from 'react';
import './App.scss';

import LeftSidebar from './Components/LeftSidebar/LeftSidebar';
import Main from './Components/Main/Main';

function App() {

 return<> 

    <div className="container">
    <LeftSidebar />
    <Main />
    </div>

 </>;
 
}

export default App;