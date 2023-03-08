import React from 'react';
import './styles/App.module.sass';
import {Header} from "./components/Header/Header";
import {Main} from "./components/MainStartPage/Main";

function App() {
  return (
    <div>
        <Header/>
        <Main/>
    </div>
  );
}

export default App;
