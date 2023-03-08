import React from 'react';
import cl from "../Input/Input.module.sass";
import cn from 'classnames/bind'

const cx = cn.bind(cl)


interface InputProps {
    placeholder: string
    type?: string
}

export const Input = ({placeholder, type}: InputProps) => {
    return (
        <input type={type} className={cl.inputReg} placeholder={placeholder}/>
    );
};

