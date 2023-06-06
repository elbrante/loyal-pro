import React from 'react';
import cl from "./Input.module.sass";
import cn from 'classnames/bind'

const cx = cn.bind(cl)


interface InputProps {
    placeholder: string
    type?: string
    colorText: 'MAIN' | 'CRM'
}

export const Input = ({placeholder, type, colorText}: InputProps) => {
    return (
        <input type={type}
               className={cx(cl.inputReg, {
                   whiteText: colorText === 'MAIN',
                   blackText: colorText === 'CRM',
               })}
               placeholder={placeholder}
        />
    );
};

