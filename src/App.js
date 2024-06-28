//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Entry } from './page/entry/Entry.page.js';
import { DefaultLayout } from './layout/DefaultLayout.js';
import { Dashboard } from './page/dashboard/Dashboard.page.js';
import { AddTicket } from './page/new-ticket/AddTicket.page.js';

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
         {/* <Dashboard/> */}
         <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
