import React, {ReactNode} from 'react';
import cl from "../ButtonComponent/Button.module.sass";
import Vector from "../../../asserts/VectorButtonGroupOne.svg";
import cn from 'classnames/bind'

const cx = cn.bind(cl)


interface ButtonProps {
    type?: 'AUTH' | 'MAIN' | 'LOGIN';
    nameButton: string;
    onClick?: () => void;
}

export const Button = ({nameButton, type, onClick}: ButtonProps) => {
    return (
        <div onClick={onClick} className={cx(cl.borderBlur, {
            borderOutMain: type == 'MAIN',
            borderOutAuth: type == 'AUTH',
            borderOutLogin: type == 'LOGIN',
        })}>
             <button className={cx({
                 buttonAuthModal: type == 'AUTH',
                 buttonMain: type == 'MAIN',
             })}>
                 {nameButton}
                 {/*<img src={Vector} alt=""/>*/}
                 {/*потом непонятно, как его переиспользовать, т.к здесь изображение*/}
             </button>
        </div>
    );
};

