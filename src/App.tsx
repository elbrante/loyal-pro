import React from 'react';
import  cl from './styles/App.module.sass';
import {Header} from "./components/Header/Header";
import {Main} from "./components/MainStartPage/Main";

export const App = () => {
  return (
    <div className={cl.App}>
        <div className={cl.mainApp}>
            <Header/>
            <Main/>
        </div>
    </div>
  );
}

