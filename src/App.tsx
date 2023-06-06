import React from 'react';
import {Main} from "./pages/MainStartPage/Main";
import {Routes, Route} from "react-router-dom";
import {Clients} from "./pages/Clients/Clients";
import {Layout} from "./components/Layout/Layout";
import {Operation} from "./pages/Operation/Operation";
import {Stat} from "./pages/Stat/Stat";
import {Sources} from "./pages/Sources/Sources";

export const App = () => {
  return (
      <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/crm'} element={<Layout/>}>
              <Route path={'clients'} element={<Clients/>}/>
              <Route path={'operations'} element={<Operation/>}/>
              <Route path={'stat'} element={<Stat/>}/>
              <Route path={'sources'} element={<Sources/>}/>
          </Route>
      </Routes>
  );
}

