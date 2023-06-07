import React, {ReactNode} from 'react';
import cl from './ButtonAdd.module.sass'

interface Props {
    children: ReactNode;
    onClick?: () => void;
    width: number;
}



export const ButtonAdd = ({children, onClick, width}: Props) => {
    return (
        <button style={{width: width}} onClick={onClick} className={cl.button}>
            {children}
        </button>
    );
};

