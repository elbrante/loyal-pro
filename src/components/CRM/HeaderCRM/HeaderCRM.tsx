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
                    <img className={cl.imageNav} src={clients} alt={'Клиенты'}/>
                    Клиенты
                </NavLink>
                <NavLink
                    to={'operations'}
                    className={({isActive}) => cx(cl.link, isActive && cl.linkActive)}>
                    <img className={cl.imageNav} src={operations} alt={'Операции'}/>
                    Операции
                </NavLink>
                <NavLink
                    to={'stat'}
                    className={({isActive}) => cx(cl.link, isActive && cl.linkActive)}>
                    <img className={cl.imageNav} src={stat} alt={'Статистика'}/>
                    Статистика
                </NavLink>
                <NavLink
                    to={'sources'}
                    className={({isActive}) => cx(cl.link, isActive && cl.linkActive)}>
                    <img className={cl.imageNav} src={ist} alt={'Источники'}/>
                    Источники
                </NavLink>
            </nav>
        </header>
    );
};

