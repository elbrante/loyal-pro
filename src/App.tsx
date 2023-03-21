import React from 'react';
import {Main} from "./components/MainStartPage/Main";
import {Routes, Route} from "react-router-dom";
import {Clients} from "./components/CRM/Clients";
import {Layout} from "./components/CRM/Layout/Layout";

export const App = () => {
  return (
      <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/crm'} element={<Layout/>}>
              <Route path={'clients'} element={<Clients/>}/>
          </Route>
          {/*<Route path={'/'} element={<Main/>}/>*/}
          {/*<Route path={'/crm'} element={<Layout/>}/>*/}
          {/*<Route path={'/clients'} element={<Clients/>}/>*/}
      </Routes>
  );
}

