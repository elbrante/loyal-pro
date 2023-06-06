import React from 'react';
import cl from "../CircleComponent/Circle.module.sass";

interface CircleProps {
    forWhat: string
}

export const Circle = ({forWhat}: CircleProps) => {
    return (
        <div className={cl.circleBlur}>
            <div className={cl.circle}>
                {forWhat}
            </div>
        </div>
    );
};

