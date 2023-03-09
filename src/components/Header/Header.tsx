import React from 'react';
import logo from "../../asserts/Logo.svg";
import cl from "./Header.module.sass"

export const Header = () => {
    return (
        <header>
            <div className={cl.left}>
                <img src={logo} alt="Логотип" className={cl.imgLogo} />
                <span className={cl.leftText}>Организация бизнеса</span>
            </div>

        </header>
    );
};

