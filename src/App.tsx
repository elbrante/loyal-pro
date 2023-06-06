import React from 'react';
import { Main } from "./components/MainStartPage/Main";
import { Routes, Route } from "react-router-dom";
import { Clients } from "./components/CRM/Clients";
import { Layout } from "./components/CRM/Layout/Layout";
import { Operation } from "./components/CRM/Operation/Operation";
import { Stat } from "./components/CRM/Stat/Stat";
import { Sources } from "./components/CRM/Sources/Sources";
import { RequireAuth } from './hooks/useAuthCheck';

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main />} />
            <Route element={<RequireAuth />} >
                <Route path={'/crm'} element={<Layout />}>
                    <Route path={'clients'} element={<Clients />} />
                    <Route path={'operations'} element={<Operation />} />
                    <Route path={'stat'} element={<Stat />} />
                    <Route path={'sources'} element={<Sources />} />
                </Route>
            </Route>
        </Routes>
    );
}

