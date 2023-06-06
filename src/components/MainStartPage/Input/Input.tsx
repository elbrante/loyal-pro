import React from 'react';
import cl from "../Input/Input.module.sass";
import cn from 'classnames/bind'

const cx = cn.bind(cl)


interface InputProps {
    placeholder: string
    type?: string
    colorText: 'MAIN' | 'CRM'
    state: any
}

export const Input = ({ placeholder, type, colorText, state }: InputProps) => {
    return (
        <input type={type}
            onChange={(e) => state(e.target.value)}
            className={cx(cl.inputReg, {
                whiteText: colorText === 'MAIN',
                blackText: colorText === 'CRM',
            })}
            placeholder={placeholder}
        />
    );
};

