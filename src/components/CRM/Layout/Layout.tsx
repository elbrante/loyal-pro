import React from 'react';
import {HeaderCRM} from "../HeaderCRM/HeaderCRM";
import {Outlet} from "react-router-dom";
import cl from './Layout.module.sass'

export const Layout = () => {
    return (
        <div className={cl.mainBlock}>
            <HeaderCRM/>
            <main className={cl.mainWrapper}>
                <Outlet/>
            </main>
        </div>
    );
};

