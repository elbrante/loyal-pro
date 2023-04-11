import React from 'react';
import cl from './Sources.module.sass'

export const Sources = () => {
    return (
        <div className={cl.wrapper1}>
            <table>
                <thead>
                    <th>Описание</th>
                    <th>Дата создания</th>
                    <th>Источник</th>
                    <th>Ссылка</th>
                </thead>
            </table>
        </div>
    );
};
