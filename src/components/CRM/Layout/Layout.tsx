import React from 'react';
import {HeaderCRM} from "../HeaderCRM/HeaderCRM";
import {Outlet} from "react-router-dom";
import cl from './Layout.module.sass'

export const Layout = () => {
    return (
        <div className={cl.mainBlock}>
            <HeaderCRM/>
            <main className={cl.mainWrapper}>
                <div className={cl.item1}>
                    <div className={cl.item2}>
                        <Outlet/>
                    </div>
                </div>
            </main>
        </div>
    );
};

