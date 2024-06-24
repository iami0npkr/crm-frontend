//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Entry } from './page/entry/Entry.page.js';
import { DefaultLayout } from './layout/DefaultLayout.js';

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        //Dashboard
      </DefaultLayout>
    </div>
  );
}

export default App;
