import React from 'react';
import cl from './HeaderCRM.module.sass'
import {NavLink} from "react-router-dom";
import clients from "../../../asserts/clients.svg"
import operations from "../../../asserts/operations.svg"
import stat from "../../../asserts/stat.svg"
import ist from "../../../asserts/ist.svg"
import cn from "classnames/bind";

const cx = cn.bind(cl)

export const HeaderCRM = () => {
    return (
        <header className={cl.header}>
            <nav className={cl.navLinkLeft}>
                <NavLink
                    to={'clients'}
                    className={({isActive}) => cx(cl.link, isActive && cl.linkActive)}>
                    <img src={clients} alt={'Клиенты'}/>
                    Клиенты
                </NavLink>
                <NavLink
                    to={'/'}
                    className={({isActive}) => cx(cl.link, isActive && cl.linkActive)}>
                    <img src={operations} alt={'Операции'}/>
                    Операции
                </NavLink>
                <NavLink
                    to={'/'}
                    className={({isActive}) => cx(cl.link, isActive && cl.linkActive)}>
                    <img src={stat} alt={'Статистика'}/>
                    Статистика
                </NavLink>
                <NavLink
                    to={'/'}
                    className={({isActive}) => cx(cl.link, isActive && cl.linkActive)}>
                    <img src={ist} alt={'Источники'}/>
                    Источники
                </NavLink>
            </nav>
        </header>
    );
};

