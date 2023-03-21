import React from 'react';
import logo from "../../../asserts/Logo.svg";
import cl from "./Header.module.sass"
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div className={cl.left}>
                <img src={logo} alt="" className={cl.imgLogo}/>
                <span className={cl.leftText}>Организация бизнеса</span>
            </div>
            <button style={{background: "white"}}>
                <NavLink to={'crm/clients'}>
                    К клиентам(временная кнопка)
                </NavLink>
            </button>
        </header>
    );
};

